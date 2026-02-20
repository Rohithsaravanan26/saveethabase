import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, Users, MessageCircle } from 'lucide-react';

export const metadata = {
    title: 'How to Create an Effective Study Group | SaveethaBase Blog',
    description: 'Learn how to form and run productive study groups for engineering. Covers group size, rules, meeting structure, and how to leverage collaborative learning.',
    keywords: ['study group', 'collaborative learning', 'group study tips', 'engineering students', 'peer learning'],
    authors: [{ name: 'SaveethaBase Team' }],
};

export default function StudyGroupGuide() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Create an Effective Study Group',
        datePublished: '2026-01-25',
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
                        <span className="px-3 py-1 bg-violet-50 text-violet-700 rounded-lg text-xs font-bold uppercase tracking-wider">Learning</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> January 25, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 8 min read</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">By <strong className="text-slate-700">SaveethaBase Team</strong></p>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        How to Create an Effective Study Group
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Some of the best learning happens in groups. When done right, study groups can dramatically improve your understanding, fill knowledge gaps, and make exam preparation more enjoyable. When done wrong, they can be a waste of time. This guide shows you how to create and run study groups that actually work.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Why Study Groups Work</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Research consistently shows that collaborative learning improves academic outcomes. Here&apos;s why:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Teaching reinforces learning</strong> — The Feynman Technique proves that explaining a concept to someone else is the most effective way to master it. When you teach a topic to your study group, you solidify your own understanding.</li>
                                <li><strong>Multiple perspectives</strong> — Different people understand concepts differently. Your classmate might have an insight that makes a difficult topic click for you, and vice versa.</li>
                                <li><strong>Accountability</strong> — Committing to group sessions means you&apos;re less likely to procrastinate. Social obligation is a powerful motivator.</li>
                                <li><strong>Resource sharing</strong> — Each member can contribute notes, solved problems, and reference materials from different sources, multiplying your study resources.</li>
                                <li><strong>Emotional support</strong> — Knowing that others are struggling with the same material reduces academic anxiety and builds confidence.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 1: Choose the Right Members</h2>
                            <p className="text-slate-600 leading-relaxed">
                                This is the most critical decision. The wrong group can destroy your productivity.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-green-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-green-800 mb-2">✅ Look For</h4>
                                    <ul className="space-y-2 text-green-700 text-sm">
                                        <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Students who are serious about academics</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Mixed ability levels (some stronger, some weaker)</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Different strengths (one good at theory, another at numericals)</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Reliable attendance and punctuality</li>
                                        <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Good listeners who contribute constructively</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-red-800 mb-2">❌ Avoid</h4>
                                    <ul className="space-y-2 text-red-700 text-sm">
                                        <li>• Friends who tend to socialize more than study</li>
                                        <li>• Members who consistently miss sessions</li>
                                        <li>• People who only want to copy answers</li>
                                        <li>• Individuals who dominate discussions</li>
                                        <li>• Anyone who doesn&apos;t come prepared</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 2: Set Group Size and Rules</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The optimal study group size is <strong>3-5 members</strong>. Fewer than 3 limits perspectives; more than 5 creates coordination problems and reduces individual participation.
                            </p>
                            <div className="bg-blue-50 p-5 rounded-xl mt-3">
                                <h4 className="font-bold text-blue-800 mb-2">Essential Ground Rules</h4>
                                <ul className="space-y-2 text-blue-700 text-sm">
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> <strong>Fixed schedule</strong> — Meet at the same time each week (e.g., every Saturday 10 AM - 1 PM)</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> <strong>Prepared participation</strong> — Everyone must study the topic beforehand; sessions are for discussion, not first-time reading</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> <strong>No phones during sessions</strong> — Keep all devices away except for reference</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> <strong>Rotating teacher</strong> — Each member takes turns explaining a topic to the group</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> <strong>Time limits</strong> — Allocate specific time per topic to prevent scope creep</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 3: Structure Your Sessions</h2>
                            <p className="text-slate-600 leading-relaxed">
                                An unstructured study group quickly devolves into chatting. Use this proven session structure:
                            </p>
                            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 mt-3">
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap h-fit">First 15 min</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Quick Review & Agenda</h4>
                                            <p className="text-slate-600 text-sm">Review what was covered last session. Set agenda for today. Assign teaching topics to each member.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap h-fit">60-90 min</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Teach & Discuss</h4>
                                            <p className="text-slate-600 text-sm">Each member teaches their assigned topic (15-20 min each). Others ask questions, share different perspectives, and add insights.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap h-fit">30-45 min</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Problem Solving</h4>
                                            <p className="text-slate-600 text-sm">Solve problems together — previous year questions, numerical exercises, or case studies. Compare approaches and solutions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap h-fit">Last 15 min</span>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Summary & Next Steps</h4>
                                            <p className="text-slate-600 text-sm">Summarize key takeaways. Identify remaining doubts. Assign topics and problems for next session.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 4: Use Shared Resources</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Maximize efficiency by pooling your resources:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Create a shared Google Drive folder</strong> — Upload all notes, solved problems, and reference materials</li>
                                <li><strong>Use <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link></strong> — Download and share CIA papers, PYQs, and study materials organized by subject</li>
                                <li><strong>WhatsApp group for quick doubts</strong> — Not for general chat; strictly for academic questions and resource sharing</li>
                                <li><strong>Shared formula sheets</strong> — Create collaborative documents for formulas and quick-reference guides</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Step 5: Handle Common Challenges</h2>
                            <div className="space-y-3 mt-3">
                                <div className="flex items-start gap-3">
                                    <MessageCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">&quot;We always end up just chatting&quot;</h4>
                                        <p className="text-slate-600 text-sm">Solution: Designate a session leader who keeps the group on track. Use a timer for each topic. Socialize only during breaks.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MessageCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">&quot;One person dominates the discussion&quot;</h4>
                                        <p className="text-slate-600 text-sm">Solution: Implement the rotating teacher model. Everyone must present. Use a talking stick or turn-based discussion format.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MessageCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">&quot;Members come unprepared&quot;</h4>
                                        <p className="text-slate-600 text-sm">Solution: Establish a &quot;two warnings&quot; rule. After two sessions of coming unprepared, the member agrees to leave or catch up. Group accountability matters.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MessageCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">&quot;Scheduling conflicts&quot;</h4>
                                        <p className="text-slate-600 text-sm">Solution: Use a shared calendar (Google Calendar). Find one or two fixed slots that work for everyone. Consistency is more important than frequency.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                An effective study group is built on three pillars: the right people, clear structure, and shared commitment. Start with just one study group for your hardest subject, follow the framework in this guide, and expand to other subjects as you see results. Collaborative learning isn&apos;t just about better grades — it builds communication skills, teaches you to explain complex concepts, and creates lasting academic friendships.
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
