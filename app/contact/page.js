import Link from 'next/link';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';

export const metadata = {
    title: 'Contact Us - SaveethaBase',
    description: 'Get in touch with the SaveethaBase team. Report issues, request features, or send us feedback about our academic resource platform.',
};

export default function Contact() {
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
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Have questions, feedback, or need help? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-6">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Get in Touch</h2>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <Mail className="text-blue-600" size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Email</h3>
                                        <a href="mailto:codez.ai.contact@gmail.com" className="text-blue-600 hover:underline">
                                            codez.ai.contact@gmail.com
                                        </a>
                                        <p className="text-sm text-slate-500 mt-1">For general inquiries and support</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-50 p-3 rounded-xl">
                                        <MessageSquare className="text-purple-600" size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Feedback & Suggestions</h3>
                                        <p className="text-slate-600 text-sm">
                                            We&apos;re always looking to improve. Share your ideas for new features,
                                            report bugs, or suggest improvements to make SaveethaBase better.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-50 p-3 rounded-xl">
                                        <Clock className="text-green-600" size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Response Time</h3>
                                        <p className="text-slate-600 text-sm">
                                            We typically respond within 24–48 hours during weekdays.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-50 p-3 rounded-xl">
                                        <MapPin className="text-orange-600" size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Location</h3>
                                        <p className="text-slate-600 text-sm">
                                            Saveetha Engineering College<br />
                                            Thandalam, Chennai - 602105<br />
                                            Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ / Common Topics */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-6">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">How do I upload a resource?</h3>
                                    <p className="text-sm text-slate-600">
                                        Sign in with your Google account, then click the &quot;Upload Resource&quot; button on the main page.
                                        Fill in the details and upload your PDF or DOCX file (max 10MB).
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">How do I earn points?</h3>
                                    <p className="text-sm text-slate-600">
                                        You earn 50 points for every resource you upload. Additional points are earned when
                                        other users like your resources or when you fulfill community requests.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Can I request specific resources?</h3>
                                    <p className="text-sm text-slate-600">
                                        Yes! Use the &quot;Requests&quot; tab to post a request for specific materials. Other students
                                        can see your request and upload the resources you need.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">How do I report inappropriate content?</h3>
                                    <p className="text-sm text-slate-600">
                                        Email us at <strong>codez.ai.contact@gmail.com</strong> with the resource title and
                                        description of the issue. We&apos;ll review and take action within 24 hours.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Is SaveethaBase free?</h3>
                                    <p className="text-sm text-slate-600">
                                        Yes, SaveethaBase is completely free. We are supported by advertisements to
                                        cover hosting and infrastructure costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Removal */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-6 mt-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-3">Content Removal Requests</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        If you are a faculty member or content owner and believe that your copyrighted material has been uploaded
                        to SaveethaBase without permission, please email us at <strong>codez.ai.contact@gmail.com</strong> with
                        the following information: your name and affiliation, the specific resource URL or title, proof of ownership,
                        and your preferred action. We will review and process your request within 48 hours.
                    </p>
                </div>
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
