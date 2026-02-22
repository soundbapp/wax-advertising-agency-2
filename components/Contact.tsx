
import React, { useState } from 'react';

interface ContactProps {
  planLevel?: string;
  onSuccess?: () => void;
}

const Contact: React.FC<ContactProps> = ({ planLevel, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          planLevel: planLevel || undefined
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setError('Too many submissions. Please try again later.');
        } else {
          setError(data.message || 'An error occurred. Please try again later.');
        }
        return;
      }

      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        if (onSuccess) {
          onSuccess();
        }
        // Clear success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.message || 'An error occurred. Please try again later.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center py-20">
      <div className="flex-1">
        <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px]">Direct Connection</span>
        <h2 className="text-5xl md:text-6xl font-display font-bold mt-4 leading-tight">Ready to <br />Create <span className="wax-text-gradient">Success?</span></h2>
        <p className="mt-8 text-xl text-zinc-400 max-w-lg leading-relaxed font-medium">
          Our agency has the dedication and energy to transform your business model into a market leader. Let's start the conversation.
        </p>
        
        <div className="mt-12 space-y-8">
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xl transition-colors group-hover:border-orange-500 group-hover:text-orange-500">📍</div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Our Location</p>
              <p className="text-zinc-200 font-medium">7509 Whitecedar Ln, ROWLETT, TX 75089</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xl transition-colors group-hover:border-orange-500 group-hover:text-orange-500">📞</div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Phone Number</p>
              <p className="text-zinc-200 font-medium">214-789-0076</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xl transition-colors group-hover:border-orange-500 group-hover:text-orange-500">✉️</div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Address</p>
              <p className="text-zinc-200 font-medium">abba@waxadvertisingagency.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-xl bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-12 rounded-[50px] shadow-2xl">
        <h3 className="text-2xl font-display font-bold mb-8">Claim Your Free Consultation</h3>
        
        {planLevel && (
          <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
            <p className="text-sm text-orange-400 font-bold">
              Inquiring about: <span className="text-orange-300">Level {planLevel} Plan</span>
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <p className="text-sm text-red-400 font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
            <p className="text-sm text-green-400 font-medium">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-1">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all text-white placeholder:text-zinc-700"
                placeholder="John Doe"
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-1">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all text-white placeholder:text-zinc-700"
                placeholder="(214) 000-0000"
                disabled={loading}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all text-white placeholder:text-zinc-700"
              placeholder="john@company.com"
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-1">Message / Industry</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all resize-none text-white placeholder:text-zinc-700"
              placeholder="Tell us about your business goals..."
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-5 rounded-2xl text-white font-bold text-xs tracking-[0.3em] uppercase transition-all duration-500 shadow-xl active:scale-95 ${
              loading
                ? 'bg-zinc-600 cursor-not-allowed'
                : 'bg-orange-600 hover:bg-orange-500 shadow-orange-600/20'
            }`}
          >
            {loading ? 'SENDING...' : 'START YOUR CAMPAIGN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
