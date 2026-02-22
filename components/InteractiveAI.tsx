
import React, { useState } from 'react';

const InteractiveAI: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [industry, setIndustry] = useState('');
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const handleAudit = async () => {
    if (!url) return;
    
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/audit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, industry }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle rate limit errors
        if (response.status === 429) {
          const retryAfter = data.retryAfter || 3600;
          const minutes = Math.ceil(retryAfter / 60);
          setIsRateLimited(true);
          setError(`You've unlocked all 3 complimentary audits for this hour. Our intelligence engine needs a brief moment to recalibrate—please return in ${minutes} minute${minutes !== 1 ? 's' : ''}, or connect with us to explore unlimited insights.`);
          return;
        }
        
        // Handle other errors
        setIsRateLimited(false);
        setError(data.message || 'An error occurred. Please try again later.');
        return;
      }

      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setError('Invalid response from server. Please try again.');
      }
    } catch (err) {
      setIsRateLimited(false);
      setError('Failed to connect to the server. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white border border-zinc-200 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-orange-200/20">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-zinc-900">Free Optimization Audit</h3>
            <p className="text-zinc-500 mt-2">Discover how your site stacks up against the competition in your market.</p>
            <p className="text-xs text-zinc-400 mt-2">Limit: 3 audits per hour</p>
          </div>

          {error && (
            <div className={`p-5 rounded-2xl ${isRateLimited ? 'bg-orange-50 border border-orange-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start gap-3">
                {isRateLimited && <span className="text-orange-500 text-xl flex-shrink-0">⏱️</span>}
                <div className="flex-1">
                  <p className={`text-sm font-medium leading-relaxed ${isRateLimited ? 'text-orange-800' : 'text-red-600'}`}>
                    {error}
                  </p>
                  {isRateLimited && (
                    <button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="mt-3 text-xs text-orange-600 hover:text-orange-700 font-semibold underline transition-colors"
                    >
                      Contact us for unlimited audits →
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Website URL</label>
              <input 
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (error) {
                    setError(null);
                    setIsRateLimited(false);
                  }
                }}
                placeholder="https://yourwebsite.com"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all placeholder:text-zinc-400"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Industry Sector</label>
              <input 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Local Business, Real Estate"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all placeholder:text-zinc-400"
              />
            </div>
            <button 
              onClick={handleAudit}
              disabled={loading || !url || (!!error && !isRateLimited)}
              className={`w-full py-5 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
                loading || (error && !isRateLimited) ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-200' : 'bg-orange-600 text-white hover:bg-orange-700 hover:scale-[1.01] shadow-xl shadow-orange-600/20'
              }`}
            >
              {loading ? (
                 <>
                   <div className="w-4 h-4 border-2 border-zinc-300 border-t-zinc-500 rounded-full animate-spin" />
                   Analyzing Metrics...
                 </>
              ) : 'Run Free Site Test'}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className={`transition-all duration-700 h-full ${result ? 'opacity-100 scale-100' : 'opacity-40 blur-[2px] scale-[0.98] pointer-events-none'}`}>
            {!result ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-zinc-100 rounded-[32px] bg-zinc-50/50">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-4 border border-zinc-100">📊</div>
                <p className="text-zinc-400 text-sm font-medium">Results will appear here. Our AI scans for ranking gaps, speed issues, and keyword potential.</p>
              </div>
            ) : (
              <div className="space-y-6 h-full flex flex-col justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-orange-50 border-4 border-orange-500 flex items-center justify-center text-3xl font-display font-black text-orange-600">
                    {result.seoScore}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-100/50 px-2 py-0.5 rounded">Current Score</span>
                    <h4 className="text-xl font-bold text-zinc-900 mt-1">Audit Summary</h4>
                  </div>
                </div>
                
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Priority Gaps</h4>
                  <ul className="space-y-3">
                    {result.majorGaps.map((gap: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-tight">
                        <span className="text-orange-500 flex-shrink-0">●</span> {gap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl shadow-zinc-200">
                  <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-2">Expert Consultation</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">"{result.strategyRecommendation}"</p>
                </div>
              </div>
            )}
          </div>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] rounded-[32px] z-10">
               <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-900 animate-pulse">Scanning Site Infrastructure</span>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveAI;
