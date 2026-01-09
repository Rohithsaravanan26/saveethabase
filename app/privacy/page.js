export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-6">Privacy Policy</h1>
                <p className="text-sm text-slate-500 mb-8">Last updated: January 9, 2026</p>

                <div className="space-y-6 text-slate-700">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Introduction</h2>
                        <p>SaveethaBase ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Information We Collect</h2>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Name and email address (via Supabase authentication)</li>
                            <li>Profile information you provide</li>
                            <li>Files and documents you upload</li>
                            <li>Usage data and activity logs</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-4 mb-2">Automatically Collected Information</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>IP address and device information</li>
                            <li>Browser type and version</li>
                            <li>Pages visited and time spent</li>
                            <li>Referral sources</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">How We Use Your Information</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>To provide and maintain our service</li>
                            <li>To authenticate users and manage accounts</li>
                            <li>To store and deliver uploaded files</li>
                            <li>To improve user experience</li>
                            <li>To communicate with you about the service</li>
                            <li>To detect and prevent abuse</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Third-Party Services</h2>
                        <p className="mb-2">We use the following third-party services:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Supabase:</strong> Database and authentication</li>
                            <li><strong>Supabase Storage:</strong> File storage and delivery</li>
                            <li><strong>Vercel:</strong> Hosting and deployment</li>
                            <li><strong>Google AdSense:</strong> Advertising (when enabled)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Cookies and Tracking</h2>
                        <p>We use cookies and similar tracking technologies to:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Maintain your login session</li>
                            <li>Remember your preferences</li>
                            <li>Analyze site usage</li>
                            <li>Serve relevant advertisements (Google AdSense)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Data Security</h2>
                        <p>We implement appropriate security measures including:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Encrypted data transmission (HTTPS/SSL)</li>
                            <li>Secure authentication via Supabase</li>
                            <li>Regular security updates</li>
                            <li>Access controls and monitoring</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                            <li>Data portability</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Contact Us</h2>
                        <p>For privacy-related questions or requests, contact us at:</p>
                        <p className="mt-2"><strong>Email:</strong> codez.ai.contact@gmail.com</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
