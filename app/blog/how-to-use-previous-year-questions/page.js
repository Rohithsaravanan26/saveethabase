import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, FileText } from 'lucide-react';

export const metadata = {
    title: 'How to Use Previous Year Questions Effectively | SaveethaBase Blog',
    description: 'Learn the right way to use previous year question papers for exam preparation. Strategic approaches to PYQ analysis, pattern recognition, and smart revision.',
    keywords: ['previous year questions', 'PYQ', 'exam preparation', 'question paper analysis', 'study strategy'],
    authors: [{ name: 'SaveethaBase Team' }],
};

export default function PYQGuide() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Use Previous Year Questions Effectively',
        datePublished: '2026-02-04',
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
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold uppercase tracking-wider">Study Tips</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> February 4, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 9 min read</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">By <strong className="text-slate-700">SaveethaBase Team</strong></p>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        How to Use Previous Year Questions Effectively
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Previous Year Questions (PYQs) are arguably the single most valuable resource for exam preparation. Yet most students use them wrong — they simply read through questions and glance at answers. This guide teaches you the strategic approach to PYQ analysis that top-scoring students use to predict questions and prepare with laser focus.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Why PYQs Are Your Best Study Resource</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Previous year question papers are not just practice material — they&apos;re a window into the examiner&apos;s mind. Here&apos;s what they reveal:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Question patterns</strong> — Certain topics are asked every year in specific formats</li>
                                <li><strong>Mark distribution</strong> — Which units carry more weight in the exam</li>
                                <li><strong>Difficulty gradient</strong> — How questions progress from basic to advanced</li>
                                <li><strong>Faculty preferences</strong> — Different question paper setters have different focus areas</li>
                                <li><strong>Important vs optional topics</strong> — Some topics have never been asked despite being in the syllabus</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 1: Collect the Right Papers</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Gather at least 5 years of question papers for each subject. More papers = better pattern analysis. Sources include:
                            </p>
                            <div className="bg-blue-50 p-5 rounded-xl mt-3">
                                <ul className="space-y-2 text-blue-700 text-sm">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> <Link href="/" className="text-blue-800 hover:underline font-semibold">SaveethaBase</Link> — The easiest source, organized by subject, department, and year</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> University website — Official papers, though sometimes limited</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Seniors and batch mates — They often have papers that aren&apos;t available online</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 flex-shrink-0" /> Department library — Physical copies of older question papers</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 2: Create a Question Frequency Table</h2>
                            <p className="text-slate-600 leading-relaxed">
                                This is the most powerful technique that most students skip. Go through every paper and track how often each topic appears. Create a simple spreadsheet or table:
                            </p>
                            <div className="overflow-x-auto mt-3">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100">
                                            <th className="border border-slate-300 px-4 py-2 text-left">Topic</th>
                                            <th className="border border-slate-300 px-4 py-2">2022</th>
                                            <th className="border border-slate-300 px-4 py-2">2023</th>
                                            <th className="border border-slate-300 px-4 py-2">2024</th>
                                            <th className="border border-slate-300 px-4 py-2">2025</th>
                                            <th className="border border-slate-300 px-4 py-2">Frequency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600 text-center">
                                        <tr><td className="border border-slate-300 px-4 py-2 text-left">Normalization</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2 font-bold text-red-600">100%</td></tr>
                                        <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2 text-left">SQL Queries</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2 font-bold text-red-600">100%</td></tr>
                                        <tr><td className="border border-slate-300 px-4 py-2 text-left">ER Diagrams</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">—</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2 font-bold text-amber-600">75%</td></tr>
                                        <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2 text-left">Transactions</td><td className="border border-slate-300 px-4 py-2">—</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">✅</td><td className="border border-slate-300 px-4 py-2">—</td><td className="border border-slate-300 px-4 py-2 font-bold text-blue-600">50%</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Topics with 75-100% frequency are <strong>must-prepare</strong>. Topics with 50% are <strong>should-prepare</strong>. Topics below 25% are <strong>low priority</strong> but shouldn&apos;t be completely ignored.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 3: Identify Question Formats</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The same topic can be asked in different formats. Track which format is used most:
                            </p>
                            <div className="space-y-2 mt-3">
                                <div className="bg-purple-50 p-3 rounded-lg flex items-center gap-3">
                                    <FileText size={18} className="text-purple-700" />
                                    <div>
                                        <span className="font-bold text-purple-800 text-sm">Definition + Explanation</span>
                                        <span className="text-purple-600 text-xs ml-2">&quot;Define normalization. Explain 1NF, 2NF, 3NF with examples.&quot;</span>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg flex items-center gap-3">
                                    <FileText size={18} className="text-purple-700" />
                                    <div>
                                        <span className="font-bold text-purple-800 text-sm">Problem Solving</span>
                                        <span className="text-purple-600 text-xs ml-2">&quot;Normalize the following table to 3NF.&quot;</span>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg flex items-center gap-3">
                                    <FileText size={18} className="text-purple-700" />
                                    <div>
                                        <span className="font-bold text-purple-800 text-sm">Comparison</span>
                                        <span className="text-purple-600 text-xs ml-2">&quot;Compare BCNF and 3NF. When is BCNF preferred?&quot;</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Prepare your answers in the format most frequently asked. If normalization is always asked as a problem-solving question, practice solving problems rather than just reading the theory.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 4: Timed Practice Tests</h2>
                            <p className="text-slate-600 leading-relaxed">
                                After analyzing patterns and preparing key topics, take full mock exams under realistic conditions:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li>Set a timer for the actual exam duration (typically 3 hours)</li>
                                <li>Use a previous year paper you haven&apos;t solved before</li>
                                <li>Write answers by hand, not typed</li>
                                <li>Don&apos;t refer to notes or textbooks during the test</li>
                                <li>After finishing, evaluate your answers against a key or with a study partner</li>
                                <li>Identify gaps and target those areas in your remaining study time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 5: The &quot;Predict the Paper&quot; Exercise</h2>
                            <p className="text-slate-600 leading-relaxed">
                                After analyzing 5+ years of papers, try to predict what will be asked in your upcoming exam. Create your own question paper based on the patterns you&apos;ve identified. This exercise forces you to think like the examiner and ensures you&apos;re prepared for the most likely questions.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Top students often predict 60-70% of the questions correctly using this method. Even if you&apos;re not exactly right, the preparation for your predicted questions covers enough ground to handle whatever actually appears.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Previous year questions are a strategic tool, not just practice material. Use them to analyze patterns, prioritize topics, and simulate exam conditions. Start your PYQ analysis at least 2 weeks before the exam for the best results.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Find organized collections of previous year question papers and CIA papers for every department and subject on <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link>.
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
