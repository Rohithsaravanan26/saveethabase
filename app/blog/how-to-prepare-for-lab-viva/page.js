import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, MessageSquare } from 'lucide-react';

export const metadata = {
    title: 'How to Prepare for Lab Viva: Department-Wise Guide | SaveethaBase Blog',
    description: 'Complete guide to preparing for lab viva voce exams. Includes department-wise tips for CSE, ECE, MECH, CIVIL, and EEE students with common questions and strategies.',
    keywords: ['lab viva preparation', 'viva questions', 'engineering lab', 'practical exam tips', 'Saveetha Engineering College'],
    authors: [{ name: 'SaveethaBase Team' }],
};

export default function LabVivaGuide() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Prepare for Lab Viva: Department-Wise Guide',
        datePublished: '2026-02-14',
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
                        <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-lg text-xs font-bold uppercase tracking-wider">Guides</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> February 14, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 9 min read</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">By <strong className="text-slate-700">SaveethaBase Team</strong></p>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        How to Prepare for Lab Viva: Department-Wise Guide
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Lab viva voce exams are often the most anxiety-inducing part of practical assessments. Unlike written exams where you can take time to think, viva requires you to answer questions on the spot. However, with the right preparation strategy, you can walk into any viva with confidence. This guide covers general viva preparation strategies and department-specific tips.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Why Lab Viva Matters</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Lab viva typically accounts for 20-40% of your practical exam marks. Many students focus entirely on completing the lab record and performing the experiment, neglecting viva preparation. This is a costly mistake — viva performance often determines whether you score an A or a B in lab courses.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Additionally, viva exams develop skills that are crucial for job interviews and professional presentations. The ability to explain technical concepts clearly and think on your feet is invaluable in any engineering career.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">General Viva Preparation Strategies</h2>
                            <div className="space-y-3 mt-3">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">Understand the Theory Behind Every Experiment</h4>
                                        <p className="text-slate-600 text-sm">Don&apos;t just follow the procedure mechanically. Understand WHY each step is performed. Examiners always ask &quot;Why did you do this?&quot; or &quot;What happens if you change this parameter?&quot;</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">Know Your Lab Record Inside Out</h4>
                                        <p className="text-slate-600 text-sm">Be able to explain every diagram, formula, and observation in your lab record. If you can&apos;t explain what you wrote, the examiner will know you copied it.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">Practice Explaining Concepts Aloud</h4>
                                        <p className="text-slate-600 text-sm">Practice explaining each experiment to a friend or in front of a mirror. This builds verbal fluency and helps you identify gaps in your understanding.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">Prepare for Common Cross-Questions</h4>
                                        <p className="text-slate-600 text-sm">Examiners often ask questions that connect different experiments or relate to real-world applications. Think about how each experiment applies to industry scenarios.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Department-Wise Viva Tips</h2>

                            <div className="space-y-4 mt-4">
                                <div className="bg-blue-50 p-5 rounded-xl">
                                    <h3 className="font-bold text-blue-800 text-lg mb-2">🖥️ CSE (Computer Science Engineering)</h3>
                                    <p className="text-blue-700 text-sm mb-2">CSE lab vivas focus on programming logic, algorithm analysis, and software tools.</p>
                                    <ul className="space-y-1 text-blue-700 text-sm">
                                        <li>• Be ready to trace through your code line by line and explain the output</li>
                                        <li>• Know the time and space complexity of your algorithms</li>
                                        <li>• Understand data structures used in your programs (arrays, linked lists, trees)</li>
                                        <li>• DBMS lab: Know normalization, SQL query optimization, and transaction properties (ACID)</li>
                                        <li>• OS lab: Understand process scheduling algorithms and their trade-offs</li>
                                        <li>• Networks lab: Know the TCP/IP layers and explain packet flow</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 p-5 rounded-xl">
                                    <h3 className="font-bold text-purple-800 text-lg mb-2">📡 ECE (Electronics & Communication)</h3>
                                    <p className="text-purple-700 text-sm mb-2">ECE vivas emphasize circuit analysis, component knowledge, and signal behavior.</p>
                                    <ul className="space-y-1 text-purple-700 text-sm">
                                        <li>• Know the pin diagrams and specifications of ICs used in experiments</li>
                                        <li>• Understand the working principle of every component (resistor, capacitor, transistor, op-amp)</li>
                                        <li>• Be able to read and interpret circuit diagrams and waveforms</li>
                                        <li>• Communication lab: Know modulation types, frequency bands, and antenna characteristics</li>
                                        <li>• VLSI lab: Understand logic gates, flip-flops, and timing diagrams</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-5 rounded-xl">
                                    <h3 className="font-bold text-green-800 text-lg mb-2">⚙️ MECH (Mechanical Engineering)</h3>
                                    <p className="text-green-700 text-sm mb-2">Mechanical lab vivas test your understanding of machines, materials, and manufacturing processes.</p>
                                    <ul className="space-y-1 text-green-700 text-sm">
                                        <li>• Know the specifications and working principles of each machine tool</li>
                                        <li>• Understand material properties and why specific materials are used for specific applications</li>
                                        <li>• Thermodynamics lab: Know the laws of thermodynamics and their practical applications</li>
                                        <li>• CAD lab: Be able to explain geometric dimensioning and tolerancing</li>
                                        <li>• Fluid mechanics lab: Understand Reynolds number, Bernoulli&apos;s principle, and pump types</li>
                                    </ul>
                                </div>

                                <div className="bg-orange-50 p-5 rounded-xl">
                                    <h3 className="font-bold text-orange-800 text-lg mb-2">🏗️ CIVIL (Civil Engineering)</h3>
                                    <p className="text-orange-700 text-sm mb-2">Civil lab vivas focus on material testing, structural analysis, and safety standards.</p>
                                    <ul className="space-y-1 text-orange-700 text-sm">
                                        <li>• Know IS codes and standards relevant to each experiment</li>
                                        <li>• Understand testing procedures for concrete, steel, and soil</li>
                                        <li>• Survey lab: Know instrument handling and error correction methods</li>
                                        <li>• Environmental lab: Understand water quality parameters and testing methods</li>
                                        <li>• Be able to explain the significance of each test result and acceptable ranges</li>
                                    </ul>
                                </div>

                                <div className="bg-amber-50 p-5 rounded-xl">
                                    <h3 className="font-bold text-amber-800 text-lg mb-2">⚡ EEE (Electrical & Electronics)</h3>
                                    <p className="text-amber-700 text-sm mb-2">EEE vivas test circuit analysis, machine principles, and safety awareness.</p>
                                    <ul className="space-y-1 text-amber-700 text-sm">
                                        <li>• Know the construction and working principle of transformers, motors, and generators</li>
                                        <li>• Understand power factor, efficiency, and regulation of electrical machines</li>
                                        <li>• Be familiar with safety precautions and why they matter</li>
                                        <li>• Power electronics lab: Know switching devices (SCR, MOSFET) and converter circuits</li>
                                        <li>• Control systems lab: Understand transfer functions and stability criteria</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">During the Viva: Dos and Don&apos;ts</h2>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-green-800 mb-2">✅ Do</h4>
                                    <ul className="space-y-1 text-green-700 text-sm">
                                        <li>• Speak clearly and confidently</li>
                                        <li>• Start with a brief overview before details</li>
                                        <li>• Use diagrams on paper to explain if needed</li>
                                        <li>• Admit when you don&apos;t know and ask to be corrected</li>
                                        <li>• Make eye contact with the examiner</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-red-800 mb-2">❌ Don&apos;t</h4>
                                    <ul className="space-y-1 text-red-700 text-sm">
                                        <li>• Don&apos;t bluff or make up answers</li>
                                        <li>• Don&apos;t argue with the examiner</li>
                                        <li>• Don&apos;t give one-word answers — elaborate</li>
                                        <li>• Don&apos;t look at your lab record while answering</li>
                                        <li>• Don&apos;t panic if you don&apos;t know one question</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Lab viva preparation is about understanding, not memorization. If you truly understand why each experiment works and can articulate it clearly, you&apos;ll ace any viva exam. Start preparing at least one week before the practical exam — review your lab records, practice explaining experiments, and study the underlying theory.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Find lab records, practical guides, and study materials for every department on <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link>.
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
