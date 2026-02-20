import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'The Power of Collaborative Learning in Engineering | SaveethaBase Blog',
    description: 'Discover why studying with peers and sharing resources leads to better academic outcomes. Learn how community-driven platforms enable collaborative learning.',
    keywords: ['collaborative learning', 'peer learning', 'study groups', 'engineering education', 'resource sharing'],
};

export default function CollaborativeLearning() {
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
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold uppercase tracking-wider">Learning</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> January 20, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 6 min read</span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        The Power of Collaborative Learning in Engineering
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Engineering education has traditionally been seen as an individual pursuit — hours spent alone with
                            textbooks and problem sets. But research consistently shows that collaborative learning produces
                            better outcomes. When students share resources, explain concepts to each other, and learn together,
                            everyone benefits.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Why Collaborative Learning Works</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Cognitive science research reveals several reasons why learning with others is more effective:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Social learning theory:</strong> We learn faster when observing and interacting with peers who model effective problem-solving approaches.</li>
                                <li><strong>The generation effect:</strong> Explaining concepts to others forces you to organize your thoughts and identify gaps in your own understanding.</li>
                                <li><strong>Diverse perspectives:</strong> Different students approach problems differently. Exposure to varied methods broadens your problem-solving toolkit.</li>
                                <li><strong>Accountability:</strong> Studying in groups creates social motivation that reduces procrastination.</li>
                                <li><strong>Emotional support:</strong> Knowing others are facing the same challenges reduces stress and boosts confidence.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">How Resource Sharing Transforms Learning</h2>
                            <p className="text-slate-600 leading-relaxed">
                                One of the most impactful forms of collaboration is sharing academic resources. When a student who excels
                                in a subject shares their notes, everyone in the community gains access to that quality material. This
                                creates a positive feedback loop:
                            </p>
                            <div className="bg-indigo-50 p-5 rounded-xl mt-3">
                                <ol className="space-y-3 text-indigo-800">
                                    <li className="flex gap-2"><span className="bg-indigo-200 px-2 py-0.5 rounded font-bold text-sm">1</span> A student creates quality notes for a subject</li>
                                    <li className="flex gap-2"><span className="bg-indigo-200 px-2 py-0.5 rounded font-bold text-sm">2</span> They share it on a platform like SaveethaBase</li>
                                    <li className="flex gap-2"><span className="bg-indigo-200 px-2 py-0.5 rounded font-bold text-sm">3</span> Other students study from the notes, saving hours of work</li>
                                    <li className="flex gap-2"><span className="bg-indigo-200 px-2 py-0.5 rounded font-bold text-sm">4</span> Grateful students are motivated to share their own best materials</li>
                                    <li className="flex gap-2"><span className="bg-indigo-200 px-2 py-0.5 rounded font-bold text-sm">5</span> The pool of quality resources grows for everyone</li>
                                </ol>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Building Effective Study Groups</h2>
                            <p className="text-slate-600 leading-relaxed">Not all study groups are created equal. Here&apos;s how to make yours productive:</p>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-green-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-green-800 mb-2"><CheckCircle size={16} className="inline mr-1" /> Do</h4>
                                    <ul className="text-sm text-green-700 space-y-1">
                                        <li>• Keep groups small (3-5 students)</li>
                                        <li>• Set a clear agenda for each session</li>
                                        <li>• Assign topics to teach each other</li>
                                        <li>• Practice problems together</li>
                                        <li>• Share notes and resources digitally</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-red-800 mb-2">✗ Don&apos;t</h4>
                                    <ul className="text-sm text-red-700 space-y-1">
                                        <li>• Turn sessions into social hangouts</li>
                                        <li>• Let one person do all the work</li>
                                        <li>• Skip individual study entirely</li>
                                        <li>• Compare progress negatively</li>
                                        <li>• Meet without a plan or goal</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Digital Platforms Make It Easier</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Technology has made collaborative learning more accessible than ever. Platforms like
                                <Link href="/" className="text-blue-600 hover:underline font-semibold"> SaveethaBase</Link> enable students
                                to share resources across departments and batches, breaking down traditional silos. A first-year student
                                can access notes from a fourth-year topper; a CSE student can find cross-disciplinary materials from ECE.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Key benefits of digital resource-sharing platforms:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-1 mt-2">
                                <li>24/7 access to materials from anywhere</li>
                                <li>Resources organized by subject, department, and type</li>
                                <li>Previous year papers reveal exam patterns</li>
                                <li>Gamification (points, achievements) motivates contributions</li>
                                <li>Seniors&apos; materials help juniors prepare better</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">The Academic Impact</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Studies from engineering education research show measurable benefits:
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-3">
                                <div className="bg-blue-50 p-4 rounded-xl text-center">
                                    <div className="text-3xl font-extrabold text-blue-700">25%</div>
                                    <p className="text-xs text-blue-600 mt-1">Higher retention in collaborative vs. individual study</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl text-center">
                                    <div className="text-3xl font-extrabold text-purple-700">40%</div>
                                    <p className="text-xs text-purple-600 mt-1">Less time needed when using quality shared resources</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl text-center">
                                    <div className="text-3xl font-extrabold text-green-700">3x</div>
                                    <p className="text-xs text-green-600 mt-1">More likely to pass difficult subjects with peer support</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Collaborative learning isn&apos;t just a nice-to-have — it&apos;s a proven strategy for academic success.
                                By sharing resources, forming study groups, and leveraging platforms like
                                <Link href="/" className="text-blue-600 hover:underline font-semibold"> SaveethaBase</Link>,
                                engineering students can learn faster, retain more, and achieve better results. Join the community
                                and start sharing today.
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
