
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="px-5 py-2 rounded-full border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] bg-orange-50/50">
            Legal
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl font-display font-black leading-tight text-zinc-900">
            Privacy <span className="wax-text-gradient">Policy</span>
          </h1>
          <p className="mt-4 text-zinc-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              WAX Advertising Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              We may collect information about you in a variety of ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact information you provide when contacting us or using our services.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies and Tracking:</strong> We may use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4 mt-4">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">5. Data Security</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-zinc-600 leading-relaxed font-medium mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 font-medium ml-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">7. Cookies</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">8. Third-Party Links</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-zinc-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default Privacy;
