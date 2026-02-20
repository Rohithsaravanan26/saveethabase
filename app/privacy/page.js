import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - SaveethaBase',
  description: 'Privacy Policy for SaveethaBase Academic Resource Platform. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-50 glass border-b border-white/20 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity">
            ← SaveethaBase
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white rounded-3xl shadow-lg border border-slate-200/60 p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 mb-8">Last updated: February 19, 2026</p>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to SaveethaBase (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). SaveethaBase is an academic resource sharing platform
                designed for students of Saveetha Engineering College. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website at <strong>saveethabase.app</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By using our platform, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">2.1 Personal Information</h3>
              <p className="text-slate-600 leading-relaxed">When you sign in using Google OAuth, we may collect:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Your name and email address</li>
                <li>Profile picture (Google avatar)</li>
                <li>Google account identifier</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">2.2 Usage Data</h3>
              <p className="text-slate-600 leading-relaxed">We automatically collect information about how you interact with the platform, including:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Pages visited and features used</li>
                <li>Upload and download activity</li>
                <li>Search queries</li>
                <li>Browser type, device information, and IP address</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">2.3 User-Generated Content</h3>
              <p className="text-slate-600 leading-relaxed">
                When you upload resources, we store the file metadata (title, subject, category), your reviews, ratings,
                and any other content you voluntarily share on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Provide, maintain, and improve our platform</li>
                <li>Authenticate users and manage accounts</li>
                <li>Track contributions and award achievement badges and points</li>
                <li>Send notifications about relevant activity</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Ensure platform security and prevent abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Third-Party Services</h2>
              <p className="text-slate-600 leading-relaxed">We integrate with the following third-party services:</p>

              <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">4.1 Supabase</h3>
              <p className="text-slate-600 leading-relaxed">
                We use Supabase for authentication and database services. Your account data and content metadata
                are stored securely on Supabase servers. See their
                <a href="https://supabase.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
              </p>

              <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">4.2 Cloudinary</h3>
              <p className="text-slate-600 leading-relaxed">
                Uploaded documents are stored on Cloudinary&apos;s cloud storage. See their
                <a href="https://cloudinary.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
              </p>

              <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">4.3 Google AdSense</h3>
              <p className="text-slate-600 leading-relaxed">
                We use Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads
                based on your prior visits. You may opt out of personalized advertising by visiting
                <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Google Ads Settings</a>.
                See Google&apos;s
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
              </p>

              <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">4.4 Google OAuth</h3>
              <p className="text-slate-600 leading-relaxed">
                We use Google Sign-In for authentication. Only your basic profile information (name, email, avatar) is accessed.
                We do not access your Google Drive, contacts, or any other Google services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">5. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                Our site uses cookies for authentication sessions and personalization. Third-party services such as
                Google AdSense may also set cookies on your device. You can manage cookie preferences through your
                browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">6. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement industry-standard security measures to protect your data, including encrypted connections (HTTPS),
                secure authentication via OAuth, and access controls on our database. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">7. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of personalized advertising</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-2">
                To exercise any of these rights, please contact us at <strong>codez.ai.contact@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">8. Children&apos;s Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                Our platform is intended for college students (18 years and older). We do not knowingly collect
                personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">9. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">10. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none text-slate-600 space-y-1 mt-2">
                <li><strong>Email:</strong> codez.ai.contact@gmail.com</li>
                <li><strong>Platform:</strong> <a href="https://saveethabase.app" className="text-blue-600 hover:underline">saveethabase.app</a></li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-400 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} SaveethaBase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
