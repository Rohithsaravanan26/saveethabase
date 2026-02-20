import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, GraduationCap, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata = {
    title: 'How to Score Well in Semester Exams: The Ultimate Guide | SaveethaBase Blog',
    description: 'A comprehensive 30-day preparation plan for semester exams. Learn study strategies, time management, revision techniques, and exam-day tips for engineering students.',
    keywords: ['semester exams', 'exam preparation', 'engineering exams', 'study plan', 'Saveetha Engineering College'],
    authors: [{ name: 'SaveethaBase Team' }],
};

export default function SemesterExamScoring() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Score Well in Semester Exams: The Ultimate Guide',
        datePublished: '2026-02-18',
        author: { '@type': 'Organization', name: 'SaveethaBase Team' },
        publisher: { '@type': 'Organization', name: 'SaveethaBase' },
        description: 'A comprehensive 30-day preparation plan for semester exams.',
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
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold uppercase tracking-wider">Exam Prep</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> February 18, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 12 min read</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">By <strong className="text-slate-700">SaveethaBase Team</strong></p>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        How to Score Well in Semester Exams: The Ultimate Guide
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Semester exams are the most critical evaluation in your engineering journey. Unlike CIA exams that cover a few units, semester exams test your understanding of the entire syllabus. With the right strategy, time management, and preparation techniques, you can consistently score above 80% in every subject. This guide provides a detailed, day-by-day approach to semester exam preparation.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Why Semester Exams Matter More Than You Think</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Your semester exam scores directly impact your CGPA, which affects placement eligibility, higher education applications, and scholarship opportunities. Many top recruiters at Saveetha Engineering College have a minimum CGPA cutoff of 7.5 or higher. Additionally, university rank holders often receive recognition and career advantages that last well beyond college.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Unlike CIA exams where partial preparation can still yield decent marks, semester exams require comprehensive understanding. The question papers often include questions from every unit, and the difficulty level is calibrated to test deep conceptual understanding rather than surface-level memorization.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">The 30-Day Preparation Framework</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Starting your preparation 30 days before the exam gives you enough time to cover the entire syllabus without burning out. Here&apos;s a week-by-week breakdown:
                            </p>

                            <div className="mt-4 space-y-4">
                                <div className="bg-blue-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-blue-800 mb-2">Week 1 (Days 1-7): First Reading & Overview</h4>
                                    <ul className="space-y-2 text-blue-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Read through all five units at a comfortable pace</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Mark important topics, definitions, and formulas</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Create a topic list for each unit with difficulty ratings</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Identify your weak areas that need extra attention</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-purple-800 mb-2">Week 2 (Days 8-14): Deep Study & Notes</h4>
                                    <ul className="space-y-2 text-purple-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Study each unit in depth — focus on understanding concepts</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Create concise handwritten summary notes for each unit</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Solve textbook examples and in-class problems</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Use SaveethaBase to download reference materials and past papers</li>
                                    </ul>
                                </div>

                                <div className="bg-amber-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-amber-800 mb-2">Week 3 (Days 15-21): Practice & Problem Solving</h4>
                                    <ul className="space-y-2 text-amber-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Solve 3-4 previous year question papers under timed conditions</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Practice numerical problems repeatedly until confident</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Write model answers for important 16-mark questions</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Discuss difficult topics with classmates or study groups</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-green-800 mb-2">Week 4 (Days 22-30): Revision & Mock Tests</h4>
                                    <ul className="space-y-2 text-green-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Revise summary notes daily — focus on weak areas</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Take full-length mock tests with strict time limits</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Memorize formulas, diagrams, and key definitions</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Don&apos;t start new topics in the last 3 days — only revise</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Subject-Specific Strategies</h2>
                            <p className="text-slate-600 leading-relaxed">Different subjects require different approaches. Here&apos;s how to adapt your strategy:</p>

                            <div className="space-y-3 mt-3">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h4 className="font-bold text-slate-800">Mathematics & Numerical Subjects</h4>
                                    <p className="text-slate-600 text-sm">Focus on solving problems rather than reading theory. Practice each type of problem at least 5 times. Keep a formula sheet and revise it daily. Time yourself while solving to build speed.</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h4 className="font-bold text-slate-800">Theory-Heavy Subjects (Management, English)</h4>
                                    <p className="text-slate-600 text-sm">Create mind maps and flowcharts. Write answers in point format with subheadings. Focus on key terms and definitions. Practice writing 16-mark answers within 15 minutes.</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h4 className="font-bold text-slate-800">Programming & Lab-Based Subjects</h4>
                                    <p className="text-slate-600 text-sm">Write code by hand without IDE assistance. Understand logic and algorithms, not just syntax. Practice common programs and be ready to trace through code execution manually.</p>
                                </div>
                                <div className="border-l-4 border-orange-500 pl-4">
                                    <h4 className="font-bold text-slate-800">Circuit & Design Subjects</h4>
                                    <p className="text-slate-600 text-sm">Master circuit diagrams and design procedures. Practice drawing neat diagrams with proper labeling. Understand the theory behind each design step rather than memorizing procedures.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Common Mistakes to Avoid</h2>
                            <div className="bg-red-50 p-5 rounded-xl">
                                <ul className="space-y-2 text-red-700 text-sm">
                                    <li className="flex items-start gap-2"><AlertTriangle size={16} className="mt-0.5 flex-shrink-0" /> <strong>Starting too late</strong> — Last-minute cramming leads to stress and poor retention</li>
                                    <li className="flex items-start gap-2"><AlertTriangle size={16} className="mt-0.5 flex-shrink-0" /> <strong>Skipping units</strong> — Question papers often have compulsory questions from every unit</li>
                                    <li className="flex items-start gap-2"><AlertTriangle size={16} className="mt-0.5 flex-shrink-0" /> <strong>Only reading, never writing</strong> — Writing answers helps with retention and time management</li>
                                    <li className="flex items-start gap-2"><AlertTriangle size={16} className="mt-0.5 flex-shrink-0" /> <strong>Ignoring previous year papers</strong> — These are your best predictor of what will be asked</li>
                                    <li className="flex items-start gap-2"><AlertTriangle size={16} className="mt-0.5 flex-shrink-0" /> <strong>Poor sleep schedule</strong> — Sleep deprivation reduces memory consolidation by up to 40%</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Exam Day Strategies That Actually Work</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Your performance on exam day depends not just on preparation but also on how you approach the paper. Follow these strategies to maximize your score:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Read the entire paper first</strong> (5 minutes) — Identify easy questions and plan your answering order</li>
                                <li><strong>Answer Part A completely</strong> — Short answer questions are easy marks if you know definitions</li>
                                <li><strong>Attempt easy Part B questions first</strong> — Build confidence and secure marks early</li>
                                <li><strong>Use proper formatting</strong> — Headings, subheadings, diagrams, and bullet points earn presentation marks</li>
                                <li><strong>Draw diagrams wherever possible</strong> — A well-labeled diagram can be worth 4-5 marks</li>
                                <li><strong>Manage time strictly</strong> — Allocate 1.5 minutes per mark as a rule of thumb</li>
                                <li><strong>Never leave a question blank</strong> — Write whatever you know, even partial answers earn marks</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Scoring well in semester exams is entirely achievable with disciplined preparation. Start early, use quality study materials, practice with past papers, and maintain a healthy study routine. The 30-day framework in this guide has helped hundreds of students improve their CGPA significantly.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Find all the study materials, previous year question papers, and CIA papers you need on <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link> — your one-stop academic resource platform.
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
