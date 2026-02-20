import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service - SaveethaBase',
    description: 'Terms of Service for SaveethaBase Academic Resource Platform. Understand the rules and guidelines for using our platform.',
};

export default function Terms() {
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
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
                    <p className="text-slate-500 mb-8">Last updated: February 19, 2026</p>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                By accessing or using SaveethaBase (&quot;the Platform&quot;), you agree to be bound by these Terms of Service.
                                If you do not agree to these terms, you may not use the Platform. SaveethaBase is an academic resource
                                sharing platform designed for students and faculty of Saveetha Engineering College.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">2. User Accounts</h2>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2">
                                <li>You must sign in using a valid Google account to upload resources, post reviews, or make requests.</li>
                                <li>You are responsible for all activity that occurs under your account.</li>
                                <li>You must not share your account credentials with others.</li>
                                <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">3. User-Uploaded Content</h2>
                            <h3 className="text-lg font-semibold text-slate-700 mb-2">3.1 Your Responsibilities</h3>
                            <p className="text-slate-600 leading-relaxed">When uploading content to SaveethaBase, you agree that:</p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                <li>You have the right to share the content or it is in the public domain</li>
                                <li>The content does not infringe on any third-party intellectual property rights</li>
                                <li>The content is academic in nature and relevant to the platform&apos;s purpose</li>
                                <li>You will not upload malicious files, spam, or inappropriate content</li>
                                <li>Study materials, previous year questions, CIA papers, and lab records are shared for educational purposes only</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">3.2 Content License</h3>
                            <p className="text-slate-600 leading-relaxed">
                                By uploading content to SaveethaBase, you grant us a non-exclusive, royalty-free, worldwide license to
                                host, display, distribute, and make the content available to other users of the platform. You retain
                                ownership of any original content you upload.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">3.3 Content Removal</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to remove any content that violates these terms, is flagged by users, or is
                                deemed inappropriate. If you believe your intellectual property has been infringed, please contact us
                                at <strong>codez.ai.contact@gmail.com</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Acceptable Use</h2>
                            <p className="text-slate-600 leading-relaxed">You agree not to:</p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                <li>Use the platform for any illegal purpose</li>
                                <li>Upload copyrighted textbooks, commercial materials, or proprietary exam papers without permission</li>
                                <li>Harass, bully, or abuse other users through reviews or messages</li>
                                <li>Attempt to gain unauthorized access to the platform or other users&apos; accounts</li>
                                <li>Use automated tools (bots, scrapers) to extract data from the platform</li>
                                <li>Manipulate the points or achievement system through fraudulent activity</li>
                                <li>Upload false, misleading, or spam content</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">5. Points and Achievements</h2>
                            <p className="text-slate-600 leading-relaxed">
                                SaveethaBase features a gamification system with points and achievement badges. These are for
                                engagement and recognition purposes only and hold no monetary value. We reserve the right to modify,
                                reset, or remove points and achievements at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">6. Advertisements</h2>
                            <p className="text-slate-600 leading-relaxed">
                                SaveethaBase displays advertisements through Google AdSense to support the platform&apos;s operation.
                                By using the platform, you acknowledge that advertisements will be displayed. Ad content is managed
                                by Google and is subject to Google&apos;s advertising policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">7. Disclaimers</h2>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2">
                                <li>
                                    <strong>Content Accuracy:</strong> SaveethaBase does not guarantee the accuracy, completeness, or
                                    quality of user-uploaded resources. Use all study materials at your own discretion.
                                </li>
                                <li>
                                    <strong>Availability:</strong> We do not guarantee uninterrupted or error-free access to the platform.
                                    The service is provided &quot;as is&quot; without warranties of any kind.
                                </li>
                                <li>
                                    <strong>Academic Use:</strong> Resources on this platform are intended for reference and study purposes
                                    only. They should not be used for academic dishonesty or plagiarism.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">8. Limitation of Liability</h2>
                            <p className="text-slate-600 leading-relaxed">
                                SaveethaBase and its creators shall not be liable for any indirect, incidental, special, or consequential
                                damages arising from the use or inability to use the platform, including but not limited to damages for
                                loss of data, academic outcomes, or other intangible losses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">9. Modifications to Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                                upon posting to this page. Continued use of the platform after changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">10. Governing Law</h2>
                            <p className="text-slate-600 leading-relaxed">
                                These terms shall be governed by and construed in accordance with the laws of India. Any disputes
                                arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">11. Contact</h2>
                            <p className="text-slate-600 leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at:
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
