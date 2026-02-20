import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, Timer } from 'lucide-react';

export const metadata = {
    title: 'Time Management Tips for Engineering Students | SaveethaBase Blog',
    description: 'Master time management in engineering college. Learn how to balance academics, projects, extracurriculars, and personal life with proven strategies and tools.',
    keywords: ['time management', 'engineering students', 'study schedule', 'productivity tips', 'college life'],
    authors: [{ name: 'SaveethaBase Team' }],
};

export default function TimeManagementTips() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Time Management Tips for Engineering Students',
        datePublished: '2026-02-12',
        author: { '@type': 'Organization', name: 'SaveethaBase Team' },
        publisher: { '@type': 'Organization', name: 'SaveethaBase' },
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold uppercase tracking-wider">Productivity</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> February 12, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 9 min read</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">By <strong className="text-slate-700">SaveethaBase Team</strong></p>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Time Management Tips for Engineering Students
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Engineering college is demanding — between lectures, labs, assignments, projects, and exams, it often feels like there aren&apos;t enough hours in the day. But the difference between students who thrive and those who struggle often comes down to one skill: time management. This guide offers practical, actionable strategies specifically designed for engineering students.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">The Engineering Student&apos;s Time Problem</h2>
                            <p className="text-slate-600 leading-relaxed">
                                A typical engineering student has about 30-35 hours of classes per week, plus labs, assignments, and projects. Add meals, commute, and basic self-care, and you&apos;re left with roughly 4-6 hours of free time per day. The key is making every hour count.
                            </p>
                            <div className="bg-slate-50 p-5 rounded-xl mt-3">
                                <h4 className="font-bold text-slate-800 mb-2">Typical Engineering Day Breakdown</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                                    <span>Classes & Labs:</span><span className="font-semibold">6-7 hours</span>
                                    <span>Travel/Commute:</span><span className="font-semibold">1-2 hours</span>
                                    <span>Meals & Breaks:</span><span className="font-semibold">2 hours</span>
                                    <span>Sleep:</span><span className="font-semibold">7-8 hours</span>
                                    <span>Personal Care:</span><span className="font-semibold">1 hour</span>
                                    <span className="font-bold text-green-700">Available for Study:</span><span className="font-bold text-green-700">4-6 hours</span>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Strategy 1: The 2-Hour Block Method</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Instead of studying in marathon sessions, break your study time into focused 2-hour blocks with 15-minute breaks. Research shows that focus degrades significantly after 90-120 minutes. Two focused hours of study are more productive than four distracted hours.
                            </p>
                            <div className="bg-blue-50 p-5 rounded-xl mt-3">
                                <h4 className="font-bold text-blue-800 mb-2">Ideal 2-Hour Block Structure</h4>
                                <ul className="space-y-1 text-blue-700 text-sm">
                                    <li className="flex items-start gap-2"><Timer size={14} className="mt-0.5 flex-shrink-0" /> <strong>0-25 min:</strong> First focus session — tackle the hardest topic</li>
                                    <li className="flex items-start gap-2"><Timer size={14} className="mt-0.5 flex-shrink-0" /> <strong>25-30 min:</strong> Short break — stretch, hydrate</li>
                                    <li className="flex items-start gap-2"><Timer size={14} className="mt-0.5 flex-shrink-0" /> <strong>30-55 min:</strong> Second focus session — continue or switch to practice problems</li>
                                    <li className="flex items-start gap-2"><Timer size={14} className="mt-0.5 flex-shrink-0" /> <strong>55-60 min:</strong> Short break</li>
                                    <li className="flex items-start gap-2"><Timer size={14} className="mt-0.5 flex-shrink-0" /> <strong>60-85 min:</strong> Third focus session — revision or notes</li>
                                    <li className="flex items-start gap-2"><Timer size={14} className="mt-0.5 flex-shrink-0" /> <strong>85-90 min:</strong> Review what you learned</li>
                                    <li className="flex items-start gap-2"><Timer size={14} className="mt-0.5 flex-shrink-0" /> <strong>90-120 min:</strong> Light practice or reading</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Strategy 2: Priority Matrix for Students</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Not all tasks are equally important. Use a simple priority system to decide what to work on first:
                            </p>
                            <div className="grid grid-cols-2 gap-3 mt-3">
                                <div className="bg-red-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-red-800 text-sm">🔴 Urgent + Important</h4>
                                    <p className="text-red-700 text-xs mt-1">Tomorrow&apos;s exam, assignment due today, project deadline</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-blue-800 text-sm">🔵 Important, Not Urgent</h4>
                                    <p className="text-blue-700 text-xs mt-1">Long-term exam prep, skill building, project planning</p>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-amber-800 text-sm">🟡 Urgent, Not Important</h4>
                                    <p className="text-amber-700 text-xs mt-1">Minor admin tasks, club meetings, social obligations</p>
                                </div>
                                <div className="bg-slate-100 p-4 rounded-xl">
                                    <h4 className="font-bold text-slate-600 text-sm">⚪ Neither</h4>
                                    <p className="text-slate-500 text-xs mt-1">Excessive social media, binge watching, aimless browsing</p>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Spend most of your time in the &quot;Important, Not Urgent&quot; quadrant. This is where long-term success comes from — consistent preparation, skill development, and early project work.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Strategy 3: The Sunday Planning Session</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Spend 30 minutes every Sunday evening planning your week. Write down all upcoming deadlines, exams, and commitments. Then allocate study blocks for each subject proportional to their difficulty and upcoming deadlines. Having a clear weekly plan eliminates daily decision fatigue about what to study.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Strategy 4: Eliminate Time Wasters</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The average college student spends 3-4 hours daily on their phone outside of productive use. Track your screen time for one week — the numbers will surprise you. Here&apos;s how to reclaim that time:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Set app timers</strong> — Limit Instagram, YouTube, and games to 30 minutes each per day</li>
                                <li><strong>Turn off notifications</strong> — Check messages at scheduled times, not every few minutes</li>
                                <li><strong>Use &quot;Do Not Disturb&quot; during study blocks</strong> — Your friends can wait 2 hours</li>
                                <li><strong>Keep your phone in another room</strong> during focused study sessions</li>
                                <li><strong>Use website blockers</strong> like Cold Turkey or Forest app during study hours</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Strategy 5: Use Dead Time Effectively</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The gaps between classes and during commute add up to 1-2 hours daily. Use this time productively:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li>Review flashcards or formula sheets during bus rides</li>
                                <li>Listen to educational podcasts or recorded lectures while commuting</li>
                                <li>Use free periods between classes for quick revision of the previous lecture</li>
                                <li>Download study materials from <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link> to review offline during gaps</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Time management isn&apos;t about squeezing every second out of your day — it&apos;s about being intentional with how you spend your time. Start with one or two strategies from this guide, build the habit, then add more. Within a month, you&apos;ll notice a significant improvement in both your academic performance and stress levels.
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
