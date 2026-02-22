
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="px-5 py-2 rounded-full border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] bg-orange-50/50">
            Legal
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl font-display font-black leading-tight text-zinc-900">
            Terms of <span className="wax-text-gradient">Service</span>
          </h1>
          <p className="mt-4 text-zinc-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              By accessing and using the WAX Advertising Agency website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">2. Services</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              WAX Advertising Agency provides SEO, SEM, PPC management, social media management, reputation management, AI brand solutions, and website hosting services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
            <p className="text-zinc-600 leading-relaxed font-medium">
              Our services are provided "as is" and we make no warranties, expressed or implied, regarding the results or outcomes of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">3. Client Responsibilities</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4">
              <li>Provide accurate and complete information necessary for us to perform our services</li>
              <li>Cooperate with our team and provide timely feedback when requested</li>
              <li>Make timely payments as agreed upon in your service contract</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              Payment terms will be specified in your individual service agreement. Generally:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4">
              <li>Payments are due according to the schedule outlined in your contract</li>
              <li>Late payments may result in suspension of services</li>
              <li>All fees are non-refundable unless otherwise specified in writing</li>
              <li>We reserve the right to change our pricing with 30 days' notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">5. Service Guarantees</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              While we work diligently to achieve first-page listings and improve your search rankings, we cannot guarantee specific results or timelines. SEO results typically take 60-90 days to become apparent after optimization is uploaded. Search engine algorithms change frequently, and results may vary based on numerous factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              All content, materials, and intellectual property created by WAX Advertising Agency in the course of providing services remain our property unless otherwise agreed in writing. You retain ownership of your existing content and materials.
            </p>
            <p className="text-zinc-600 leading-relaxed font-medium">
              You grant us a license to use your name, logo, and materials for the purpose of providing our services and for our own marketing purposes (with your consent).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">7. Confidentiality</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              We agree to keep confidential all proprietary information and trade secrets disclosed to us in the course of providing services. This obligation survives termination of our service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              To the maximum extent permitted by law, WAX Advertising Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">9. Termination</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              Either party may terminate a service agreement:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4">
              <li>With 30 days' written notice</li>
              <li>Immediately in case of material breach of contract</li>
              <li>Upon non-payment of fees</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed font-medium mt-4">
              Upon termination, you remain responsible for all fees incurred up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">10. Website Use</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4">
              <li>Use the website in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Use automated systems to access the website without permission</li>
              <li>Reproduce, duplicate, or copy any content without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">11. Changes to Terms</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              We reserve the right to modify these terms at any time. We will notify clients of material changes via email or through our website. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">12. Governing Law</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              These terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">13. Contact Information</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-zinc-900 font-bold mb-2">WAX Advertising Agency</p>
              <p className="text-zinc-600 font-medium">7509 Whitecedar Ln, ROWLETT, TX 75089</p>
              <p className="text-zinc-600 font-medium">Phone: 214-789-0076</p>
              <p className="text-zinc-600 font-medium">Email: abba@waxadvertisingagency.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
