import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, XCircle, AlertTriangle } from 'lucide-react';

export const metadata = {
    title: 'Top 10 Mistakes Students Make During Exams | SaveethaBase Blog',
    description: 'Avoid these common exam mistakes that cost engineering students marks. From poor time management to incomplete answers, learn what to fix before your next exam.',
    keywords: ['exam mistakes', 'common exam errors', 'engineering exam tips', 'exam preparation'],
    authors: [{ name: 'SaveethaBase Team' }],
};

export default function ExamMistakes() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Top 10 Mistakes Students Make During Exams',
        datePublished: '2026-02-06',
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
                        <span className="px-3 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-bold uppercase tracking-wider">Exam Tips</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> February 6, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 10 min read</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">By <strong className="text-slate-700">SaveethaBase Team</strong></p>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Top 10 Mistakes Students Make During Exams (And How to Avoid Them)
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            You studied hard, you knew the material, but your score didn&apos;t reflect your preparation. Sound familiar? More often than not, it&apos;s not a lack of knowledge that costs students marks — it&apos;s avoidable mistakes during the exam itself. After analyzing hundreds of student experiences, we&apos;ve compiled the ten most common exam mistakes and exactly how to fix them.
                        </p>

                        <div className="space-y-6">
                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #1: Not Reading the Question Paper First</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Many students start writing immediately after receiving the paper. This leads to answering questions out of order, spending too much time on hard questions early, and missing easier questions that could have been answered quickly.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Spend the first 5 minutes reading the entire paper. Mark easy questions and plan your answering order. This simple habit can boost your score by 10-15%.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #2: Poor Time Management</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Spending 45 minutes on a 16-mark question while leaving three 8-mark questions unanswered is a classic mistake. Students often get absorbed in one question and lose track of time.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Allocate 1.5 minutes per mark as a baseline. Set mental checkpoints — if you&apos;re not halfway through the paper at the halfway time mark, speed up. A partially answered question is better than a completely unanswered one.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #3: Leaving Questions Blank</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    This is perhaps the most costly mistake. Even if you only know 30% of the answer, writing something is always better than leaving it blank. Examiners can only give marks for what&apos;s written on paper.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Write whatever you know — definitions, related concepts, diagrams, formulas, even a structured outline. Partial marks are common, and 4/16 is infinitely better than 0/16.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #4: No Diagrams or Visual Aids</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Engineering exams reward visual explanations. A well-drawn circuit diagram, flowchart, or system architecture diagram can be worth 3-5 marks on its own. Many students write lengthy paragraphs when a simple diagram would score more.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Add a diagram to every answer where applicable. Label it properly with a figure number and title. Even rough sketches with correct labels score marks.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #5: Writing Without Structure</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Wall-of-text answers are hard to evaluate and often lose marks for poor presentation. Examiners spend 2-3 minutes per answer — if they can&apos;t quickly identify your key points, you lose marks.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Use headings, numbered points, and bullet lists. Start with a brief introduction, then structured points, then a conclusion. Underline keywords and definitions.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #6: Misreading the Question</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    &quot;Explain&quot; vs &quot;Compare&quot; vs &quot;Derive&quot; vs &quot;List&quot; — each instruction word demands a different type of answer. Writing a derivation when asked for an explanation wastes time and loses marks.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Circle the instruction word before answering. &quot;List&quot; = bullet points. &quot;Explain&quot; = detailed paragraphs. &quot;Compare&quot; = table format. &quot;Derive&quot; = step-by-step mathematical proof.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #7: Not Showing Calculation Steps</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    In numerical problems, jumping directly to the final answer means losing all partial marks if the answer is wrong. Even if you get the right answer, some examiners deduct marks for missing steps.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Write every step clearly. State the formula first, substitute values, show intermediate calculations, then state the final answer with units. Box or highlight the final answer.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #8: Cramming the Night Before</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    All-night study sessions before an exam feel productive but are counterproductive. Sleep deprivation impairs memory recall, critical thinking, and even basic arithmetic ability. Your brain consolidates memories during sleep.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Stop studying by 10 PM the night before. Do a light review of formula sheets and summaries. Get 7-8 hours of sleep. Your well-rested brain will perform significantly better than a sleep-deprived one.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #9: Ignoring Presentation Marks</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Clean handwriting, proper margins, numbered answers, and organized pages contribute to presentation marks. A well-presented paper creates a positive impression that subtly influences the examiner&apos;s marking.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Use a ruler for diagrams and tables. Write the question number clearly. Leave space between answers. Use both sides of the paper neatly. Start each major question on a fresh page if possible.</p>
                                </div>
                            </section>

                            <section className="border-l-4 border-red-400 pl-5">
                                <h2 className="text-xl font-bold text-slate-800 mb-2">Mistake #10: Not Reviewing Before Submission</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Submitting the paper immediately after finishing the last question means missing silly mistakes — wrong formulas, calculation errors, unanswered sub-parts, and missing page numbers. These small errors can cost you 5-10 marks collectively.
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg mt-2">
                                    <p className="text-green-700 text-sm"><strong>Fix:</strong> Reserve the last 10 minutes for review. Check that you&apos;ve answered all questions, verify numerical answers, and ensure all pages are numbered and tied properly.</p>
                                </div>
                            </section>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Most of these mistakes are completely avoidable with awareness and practice. Before your next exam, review this list and consciously apply each fix. Combined with solid preparation using quality study materials from <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link>, you&apos;ll see a noticeable improvement in your scores.
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
