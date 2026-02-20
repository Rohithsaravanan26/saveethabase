import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'The Ultimate Semester Exam Preparation Strategy | SaveethaBase Blog',
    description: 'A complete 30-day study plan for engineering semester exams. Covers time management, resource selection, revision cycles, and exam day tips.',
    keywords: ['semester exam preparation', 'exam study plan', '30 day study plan', 'engineering exam tips'],
};

export default function SemesterExamStrategy() {
    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="sticky top-0 z-50 glass border-b border-white/20 shadow-lg">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
                    <Link href="/blog" className="text-lg font-bold text-gradient hover:opacity-80 transition-opacity flex items-center gap-2">
                        <ArrowLeft size={18} /> Blog
                    </Link>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <article className="bg-white rounded-3xl shadow-lg border border-slate-200/60 p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold uppercase tracking-wider">Exam Prep</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> January 28, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 12 min read</span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        The Ultimate Semester Exam Preparation Strategy
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Semester exams cover 5 units across every subject. The volume can feel overwhelming, but with a structured
                            30-day plan, you can approach exams with confidence. This strategy has been refined by top-performing students.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">The 30-Day Framework</h2>
                            <div className="mt-4 space-y-4">
                                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-800 text-lg mb-2">Phase 1: Foundation (Days 1-12)</h3>
                                    <p className="text-blue-700 text-sm mb-2">Complete a thorough first read of all subjects.</p>
                                    <ul className="text-sm text-blue-700 space-y-1">
                                        <li>• Allocate 2 days per subject (6 subjects)</li>
                                        <li>• Read through all units, making brief notes</li>
                                        <li>• Mark difficult topics for extra attention later</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="font-bold text-purple-800 text-lg mb-2">Phase 2: Deep Study (Days 13-22)</h3>
                                    <p className="text-purple-700 text-sm mb-2">Master concepts and practice problem-solving.</p>
                                    <ul className="text-sm text-purple-700 space-y-1">
                                        <li>• Focus on understanding, not memorizing</li>
                                        <li>• Solve previous year question papers</li>
                                        <li>• Create formula sheets and summary notes</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="font-bold text-green-800 text-lg mb-2">Phase 3: Revision (Days 23-28)</h3>
                                    <p className="text-green-700 text-sm mb-2">Rapid revision and gap-filling.</p>
                                    <ul className="text-sm text-green-700 space-y-1">
                                        <li>• Revise using summary sheets</li>
                                        <li>• Solve full papers under timed conditions</li>
                                        <li>• Don&apos;t start new material at this stage</li>
                                    </ul>
                                </div>
                                <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                                    <h3 className="font-bold text-amber-800 text-lg mb-2">Phase 4: Final Prep (Days 29-30)</h3>
                                    <p className="text-amber-700 text-sm mb-2">Light revision and rest.</p>
                                    <ul className="text-sm text-amber-700 space-y-1">
                                        <li>• Quick formula scan</li>
                                        <li>• Prepare essentials (hall ticket, pen, calculator)</li>
                                        <li>• Get proper sleep (minimum 7 hours)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Daily Schedule Template</h2>
                            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 mt-3">
                                <div className="space-y-2 text-sm">
                                    <div className="flex gap-3"><span className="bg-slate-100 px-3 py-1 rounded font-mono w-24 text-center">6:00 AM</span><span className="text-slate-600">Wake up, exercise</span></div>
                                    <div className="flex gap-3"><span className="bg-blue-100 px-3 py-1 rounded font-mono w-24 text-center text-blue-700 font-bold">7-9:30</span><span className="text-slate-600"><strong>Session 1:</strong> Hardest subject (2.5 hrs)</span></div>
                                    <div className="flex gap-3"><span className="bg-blue-100 px-3 py-1 rounded font-mono w-24 text-center text-blue-700 font-bold">10-12:30</span><span className="text-slate-600"><strong>Session 2:</strong> Practice problems (2.5 hrs)</span></div>
                                    <div className="flex gap-3"><span className="bg-slate-100 px-3 py-1 rounded font-mono w-24 text-center">12:30</span><span className="text-slate-600">Lunch & rest (1.5 hrs)</span></div>
                                    <div className="flex gap-3"><span className="bg-blue-100 px-3 py-1 rounded font-mono w-24 text-center text-blue-700 font-bold">2-4 PM</span><span className="text-slate-600"><strong>Session 3:</strong> Third subject (2 hrs)</span></div>
                                    <div className="flex gap-3"><span className="bg-blue-100 px-3 py-1 rounded font-mono w-24 text-center text-blue-700 font-bold">5-7 PM</span><span className="text-slate-600"><strong>Session 4:</strong> Revision & past papers (2 hrs)</span></div>
                                    <div className="flex gap-3"><span className="bg-blue-100 px-3 py-1 rounded font-mono w-24 text-center text-blue-700 font-bold">8:30-10</span><span className="text-slate-600"><strong>Session 5:</strong> Light formula revision (1.5 hrs)</span></div>
                                </div>
                                <p className="text-xs text-slate-500 mt-3 italic">~10.5 hours productive study. Adjust based on your stamina.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Subject Prioritization</h2>
                            <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden mt-3">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100"><tr>
                                        <th className="text-left p-3 font-bold">Category</th>
                                        <th className="text-left p-3 font-bold">Time</th>
                                        <th className="text-left p-3 font-bold">Strategy</th>
                                    </tr></thead>
                                    <tbody className="text-slate-600">
                                        <tr className="border-t"><td className="p-3 font-semibold">Hard + High credits</td><td className="p-3">35%</td><td className="p-3">Maximum focus, daily practice</td></tr>
                                        <tr className="border-t"><td className="p-3 font-semibold">Easy + High credits</td><td className="p-3">25%</td><td className="p-3">Score maximizers</td></tr>
                                        <tr className="border-t"><td className="p-3 font-semibold">Hard + Low credits</td><td className="p-3">25%</td><td className="p-3">Key topics only</td></tr>
                                        <tr className="border-t"><td className="p-3 font-semibold">Easy + Low credits</td><td className="p-3">15%</td><td className="p-3">Quick revision</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Choosing Study Materials</h2>
                            <ol className="list-decimal pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Class notes</strong> — Faculty set questions from lectures</li>
                                <li><strong>PYQ papers</strong> — Reveals patterns. Available on <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link></li>
                                <li><strong>Textbooks</strong> — For deeper understanding</li>
                                <li><strong>Peer notes</strong> — Toppers&apos; shortcuts and perspectives</li>
                                <li><strong>Online resources</strong> — NPTEL, YouTube for visual learners</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Exam Day Checklist</h2>
                            <div className="bg-green-50 p-5 rounded-xl">
                                <ul className="space-y-2 text-green-800">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Good breakfast, 30-min formula revision</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Essentials: hall ticket, pens, calculator, ID</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Reach 15 minutes early, read full paper first</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Attempt best-known questions first</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Use diagrams, tables, and neat formatting</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Semester exams are manageable with a plan. Start 30 days before, follow the phased approach, and stay
                                consistent. With quality materials from <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link>,
                                you&apos;re already ahead. Good luck! 🎓
                            </p>
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
