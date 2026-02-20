import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle } from 'lucide-react';

export const metadata = {
    title: '10 Effective Study Techniques for Engineering Students | SaveethaBase Blog',
    description: 'Discover science-backed study methods used by top engineering students. From active recall to the Feynman technique, learn how to study smarter and retain more.',
    keywords: ['study techniques', 'engineering students', 'active recall', 'spaced repetition', 'Feynman technique', 'study tips'],
};

export default function StudyTechniques() {
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
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold uppercase tracking-wider">Study Tips</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                            <Calendar size={14} /> February 10, 2026
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                            <Clock size={14} /> 10 min read
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        10 Effective Study Techniques for Engineering Students
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Engineering is one of the most demanding academic fields, requiring students to master complex theories,
                            solve intricate problems, and retain vast amounts of technical information. Simply re-reading notes is
                            not enough. Here are 10 science-backed study techniques that top engineering students swear by.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Active Recall</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Active recall is the practice of trying to remember information from memory rather than passively
                                re-reading it. After studying a topic, close your notes and try to write down everything you remember.
                                This forces your brain to strengthen neural pathways, making the information stick longer.
                            </p>
                            <div className="bg-purple-50 p-4 rounded-xl mt-3">
                                <p className="text-purple-800 text-sm font-medium">
                                    <strong>How to practice:</strong> After reading a chapter, close the book and write down the key
                                    concepts, formulas, and examples from memory. Then compare with your notes and fill in the gaps.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">2. Spaced Repetition</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Instead of cramming everything in one session, spread your study sessions over multiple days. The
                                spacing effect shows that we retain information better when we review it at increasing intervals.
                                Review a topic on Day 1, then Day 3, then Day 7, then Day 14.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-2">
                                This technique is particularly effective for subjects with many formulas and definitions, such as
                                Engineering Mathematics, Physics, and Chemistry. Use flashcards or apps to schedule your reviews.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">3. The Feynman Technique</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Named after Nobel Prize-winning physicist Richard Feynman, this technique involves explaining a
                                concept in simple language as if you&apos;re teaching it to someone with no background in the subject.
                                If you can&apos;t explain it simply, you don&apos;t understand it well enough.
                            </p>
                            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 mt-3">
                                <h4 className="font-bold text-slate-800 mb-3">The 4 Steps:</h4>
                                <ol className="space-y-2 text-slate-600">
                                    <li className="flex gap-2"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold text-sm">1</span> Choose a concept you want to understand</li>
                                    <li className="flex gap-2"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold text-sm">2</span> Explain it in simple language, as if teaching a child</li>
                                    <li className="flex gap-2"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold text-sm">3</span> Identify gaps in your explanation — these are knowledge gaps</li>
                                    <li className="flex gap-2"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold text-sm">4</span> Go back to the source material and fill those gaps</li>
                                </ol>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Practice Problem Solving</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Engineering is fundamentally about problem-solving. Reading theory alone won&apos;t prepare you for exams.
                                Practice solving problems from textbooks, tutorial sheets, and previous year question papers. Start
                                with simpler problems and gradually move to complex ones.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-2">
                                Platforms like <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link> provide
                                access to previous year question papers and CIA papers that let you practice with real exam questions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">5. Mind Mapping</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Mind maps are visual representations of information that show relationships between concepts.
                                They&apos;re especially useful for subjects like Database Management, Computer Networks, and Software
                                Engineering where understanding the connections between topics is crucial.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-2">
                                Start with the main topic in the center and branch out to subtopics. Use colors, icons, and short
                                keywords rather than long sentences. This engages both the logical and creative parts of your brain.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">6. The Pomodoro Technique</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Long study sessions lead to diminishing returns. The Pomodoro Technique breaks your study time into
                                25-minute focused sessions (called &quot;pomodoros&quot;) followed by 5-minute breaks. After four pomodoros,
                                take a longer 15-30 minute break.
                            </p>
                            <div className="bg-green-50 p-4 rounded-xl mt-3">
                                <p className="text-green-800 text-sm font-medium">
                                    <strong>Pro tip:</strong> During your 25-minute focus periods, put your phone on silent or in another
                                    room. Even a single notification can break your concentration and cost you 15+ minutes of refocusing.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">7. Teach Others</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Teaching is the ultimate form of learning. When you explain concepts to classmates, you reinforce
                                your own understanding and discover gaps you didn&apos;t know existed. Form study groups where each
                                person teaches a different topic to the group.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">8. Create Summary Sheets</h2>
                            <p className="text-slate-600 leading-relaxed">
                                After studying each unit, create a one-page summary containing all key formulas, definitions,
                                diagrams, and important points. These summary sheets become invaluable during last-minute revision
                                before exams. The act of creating them is itself a powerful learning exercise.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">9. Interleaving Practice</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Instead of studying one subject for hours (blocked practice), alternate between different subjects
                                or problem types within a session. For example, spend 30 minutes on Data Structures, then 30 minutes
                                on Discrete Mathematics, then back to Data Structures. This improves your ability to distinguish
                                between problem types and apply the correct approach.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">10. Sleep and Exercise</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Often overlooked but scientifically proven: adequate sleep (7-8 hours) is essential for memory
                                consolidation. Your brain processes and strengthens memories during deep sleep. Similarly, regular
                                exercise improves blood flow to the brain, enhancing focus and cognitive function.
                            </p>
                            <div className="bg-amber-50 p-4 rounded-xl mt-3">
                                <p className="text-amber-800 text-sm font-medium">
                                    <strong>Research shows:</strong> Students who sleep well before exams perform 20-30% better than those
                                    who pull all-nighters. An all-night study session actually impairs your ability to recall information.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Putting It All Together</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The best students don&apos;t study harder — they study smarter. Combine these techniques based on the subject
                                and your learning style. Use active recall and spaced repetition for theoretical subjects, practice
                                problem-solving for numerical subjects, and mind mapping for interconnected topics.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Start by picking 2-3 techniques from this list and consistently applying them. As they become habits,
                                add more techniques to your toolkit. Your GPA will thank you.
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
