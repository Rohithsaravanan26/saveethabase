import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Target, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'How to Prepare for CIA Exams: A Complete Guide | SaveethaBase Blog',
    description: 'Master your CIA exams with proven strategies. Learn time management, study techniques, and last-minute tips specifically for Continuous Internal Assessment papers.',
    keywords: ['CIA exam preparation', 'internal assessment', 'engineering exams', 'study tips', 'Saveetha Engineering College'],
};

export default function CIAExamGuide() {
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
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold uppercase tracking-wider">Exam Prep</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                            <Calendar size={14} /> February 15, 2026
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                            <Clock size={14} /> 8 min read
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        How to Prepare for CIA Exams: A Complete Guide
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Continuous Internal Assessment (CIA) exams account for a significant portion of your final grade at
                            Saveetha Engineering College. Unlike semester exams, CIA papers are conducted more frequently and cover
                            smaller portions of the syllabus, but they require consistent preparation. Here&apos;s a comprehensive guide
                            to help you ace every CIA exam.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Understanding the CIA Structure</h2>
                            <p className="text-slate-600 leading-relaxed">
                                At most engineering colleges, the CIA system typically consists of three internal assessments conducted
                                throughout the semester. Each CIA exam usually covers specific units from the syllabus:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>CIA 1:</strong> Usually covers Units 1-2, conducted 4-5 weeks into the semester</li>
                                <li><strong>CIA 2:</strong> Covers Units 2-3, conducted around mid-semester</li>
                                <li><strong>CIA 3:</strong> Often covers Units 3-5 or the complete syllabus, conducted near the end</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Understanding this structure is crucial because it lets you plan your preparation timeline. Don&apos;t wait
                                until the last week — start revising each unit as it&apos;s taught in class.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 1: Gather the Right Materials</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The quality of your study materials directly impacts your preparation. Here&apos;s what you need:
                            </p>
                            <div className="bg-blue-50 p-5 rounded-xl mt-3">
                                <h4 className="font-bold text-blue-800 mb-2">Essential Materials Checklist</h4>
                                <ul className="space-y-2 text-blue-700">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0" /> Class notes from lectures</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0" /> Previous year CIA papers (available on SaveethaBase)</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0" /> Textbook reference material for the specific units</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0" /> Faculty-provided study guides or formula sheets</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0" /> Solved numerical problems from tutorials</li>
                                </ul>
                            </div>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Platforms like <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link> make
                                it easy to find and download previous CIA papers, organized by subject, department, and year. Using past
                                papers to understand the question pattern is one of the most effective preparation strategies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 2: Create a Study Schedule</h2>
                            <p className="text-slate-600 leading-relaxed">
                                A structured study schedule prevents last-minute cramming and ensures you cover all topics systematically.
                            </p>
                            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 mt-3">
                                <h4 className="font-bold text-slate-800 mb-3">Recommended 7-Day CIA Prep Schedule</h4>
                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap">Day 1-2</span>
                                        <p className="text-slate-600 text-sm">Read through all notes and textbook sections. Highlight key concepts, definitions, and formulas.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap">Day 3-4</span>
                                        <p className="text-slate-600 text-sm">Practice numerical problems and solve previous year CIA questions. Focus on understanding, not memorizing.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap">Day 5-6</span>
                                        <p className="text-slate-600 text-sm">Revise weak areas, create summary sheets, and practice writing answers within time limits.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap">Day 7</span>
                                        <p className="text-slate-600 text-sm">Quick revision of summaries and formulas. Don&apos;t start new topics. Get proper rest.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 3: Focus on High-Yield Topics</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Not all topics carry equal weight. By analyzing previous CIA papers, you can identify recurring
                                question patterns and topics that are frequently tested:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Definitions and fundamentals</strong> — Almost always asked in Part A (short answers)</li>
                                <li><strong>Derivations and proofs</strong> — Common in theory-heavy subjects like Mathematics, Physics</li>
                                <li><strong>Numerical problems</strong> — Frequently tested in engineering subjects with formulas</li>
                                <li><strong>Diagrams and flowcharts</strong> — Important for subjects like Computer Architecture, DBMS</li>
                                <li><strong>Comparison tables</strong> — A popular question format (e.g., &quot;Compare TCP vs UDP&quot;)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 4: Practice with Past Papers</h2>
                            <p className="text-slate-600 leading-relaxed">
                                This is arguably the most important step. Past CIA papers give you insight into:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-1 mt-2">
                                <li>The types of questions asked (descriptive, numerical, MCQ)</li>
                                <li>The difficulty level expected</li>
                                <li>Time allocation per section</li>
                                <li>Specific topics the faculty emphasizes</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Try to solve at least 2-3 previous CIA papers under timed conditions. This builds exam-day confidence
                                and helps you manage time effectively during the actual exam.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 5: Exam Day Tips</h2>
                            <div className="bg-green-50 p-5 rounded-xl">
                                <ul className="space-y-3 text-green-800">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> <strong>Read all questions first</strong> — Spend 2-3 minutes scanning the paper before writing</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> <strong>Answer easy questions first</strong> — Build confidence and secure marks early</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> <strong>Use proper formatting</strong> — Headings, bullet points, and diagrams score extra marks</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> <strong>Don&apos;t leave blanks</strong> — Write something for every question, even partial answers earn marks</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> <strong>Review before submitting</strong> — Use the last 5 minutes to check for errors and completeness</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                CIA exams don&apos;t have to be stressful. With consistent preparation, the right materials, and smart
                                study strategies, you can score well in every internal assessment. Remember to start early, practice
                                with past papers, and focus on understanding concepts rather than rote memorization.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Find all the CIA papers and study materials you need on <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link> —
                                your one-stop academic resource platform.
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
