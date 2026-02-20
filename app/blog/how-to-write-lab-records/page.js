import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata = {
    title: 'How to Write Perfect Lab Records: Step-by-Step Guide | SaveethaBase Blog',
    description: 'Learn how to write lab records that score full marks. Complete guide covering format, structure, common mistakes, and department-specific tips for engineering students.',
    keywords: ['lab records', 'engineering lab manual', 'how to write lab record', 'practical records', 'engineering experiments'],
};

export default function LabRecordsGuide() {
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
                        <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold uppercase tracking-wider">Guides</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                            <Calendar size={14} /> February 5, 2026
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                            <Clock size={14} /> 7 min read
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        How to Write Perfect Lab Records: Step-by-Step Guide
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Lab records are a critical component of engineering education, often carrying 20-25% of the total
                            subject marks. Yet many students lose marks simply because of poor formatting, incomplete content,
                            or common mistakes that are easily avoidable. This guide walks you through writing lab records that
                            impress your faculty and score maximum marks.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">The Standard Lab Record Format</h2>
                            <p className="text-slate-600 leading-relaxed">
                                While specific formats may vary by department and faculty, most engineering lab records follow this
                                standard structure:
                            </p>
                            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 mt-3">
                                <ol className="space-y-3 text-slate-600">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">1</span>
                                        <div><strong>Experiment Number and Title</strong> — Clear, descriptive title of the experiment</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">2</span>
                                        <div><strong>Date</strong> — The date the experiment was performed</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">3</span>
                                        <div><strong>Aim / Objective</strong> — A concise statement of what the experiment intends to achieve</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">4</span>
                                        <div><strong>Apparatus / Software Required</strong> — List all equipment, tools, or software used</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">5</span>
                                        <div><strong>Theory / Algorithm</strong> — Brief theoretical background or step-by-step algorithm</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">6</span>
                                        <div><strong>Procedure</strong> — Step-by-step instructions of what was done</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">7</span>
                                        <div><strong>Program / Circuit Diagram</strong> — Source code or technical diagrams</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">8</span>
                                        <div><strong>Output / Observations</strong> — Screenshots, readings, or output tables</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">9</span>
                                        <div><strong>Result</strong> — A brief statement confirming the experiment was successful</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-bold text-sm flex-shrink-0">10</span>
                                        <div><strong>Viva Questions</strong> — Common questions that may be asked during lab viva</div>
                                    </li>
                                </ol>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Writing Each Section Well</h2>

                            <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-4">The Aim</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Your aim should be a single, clear sentence that states the purpose of the experiment. Start with
                                &quot;To&quot; followed by a verb. Avoid making it too long or too vague.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mt-3">
                                <div className="bg-green-50 p-3 rounded-xl">
                                    <p className="text-green-800 text-sm"><CheckCircle size={14} className="inline mr-1" /> <strong>Good:</strong> &quot;To implement a binary search algorithm and analyze its time complexity.&quot;</p>
                                </div>
                                <div className="bg-red-50 p-3 rounded-xl">
                                    <p className="text-red-800 text-sm"><AlertCircle size={14} className="inline mr-1" /> <strong>Bad:</strong> &quot;Binary search experiment.&quot;</p>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-6">The Theory</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Keep the theory concise but informative. Include relevant formulas, definitions, and a brief
                                explanation of the underlying concept. Don&apos;t copy entire textbook pages — summarize in your own words.
                                This shows the faculty that you understand the concept, not just copied it.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-6">The Procedure</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Write the procedure as numbered steps in the past tense. Each step should be a clear, actionable
                                instruction. For programming labs, describe the algorithm logic rather than just pasting code.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-700 mb-2 mt-6">Program / Code</h3>
                            <p className="text-slate-600 leading-relaxed">
                                For programming labs, write clean, well-commented code. Include comments explaining the logic of
                                each major block. Use proper indentation and variable naming. Many students lose marks for messy,
                                uncommented code.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Common Mistakes to Avoid</h2>
                            <div className="space-y-3 mt-3">
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
                                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-red-800">Copying directly from the internet</p>
                                        <p className="text-sm text-red-700">Faculty can easily spot copy-pasted content. Always write in your own words and cite sources.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
                                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-red-800">Missing output or observations</p>
                                        <p className="text-sm text-red-700">Always include actual screenshots or output data. Don&apos;t submit a record without proof of execution.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
                                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-red-800">Inconsistent formatting</p>
                                        <p className="text-sm text-red-700">Use the same font, margins, and heading styles throughout. Inconsistency signals carelessness.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl">
                                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-red-800">Submitting late</p>
                                        <p className="text-sm text-red-700">Complete your lab record on the same day as the experiment while details are fresh in your mind.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Department-Specific Tips</h2>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-blue-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-blue-800 mb-2">CSE / IT Labs</h4>
                                    <ul className="text-sm text-blue-700 space-y-1">
                                        <li>• Include algorithm before code</li>
                                        <li>• Add code comments explaining logic</li>
                                        <li>• Show multiple test cases in output</li>
                                        <li>• Mention time and space complexity</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-green-800 mb-2">ECE / EEE Labs</h4>
                                    <ul className="text-sm text-green-700 space-y-1">
                                        <li>• Draw neat circuit diagrams</li>
                                        <li>• Tabulate readings clearly</li>
                                        <li>• Plot graphs on graph paper</li>
                                        <li>• Include component specifications</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-orange-800 mb-2">MECH / CIVIL Labs</h4>
                                    <ul className="text-sm text-orange-700 space-y-1">
                                        <li>• Include detailed free body diagrams</li>
                                        <li>• Show calculation steps clearly</li>
                                        <li>• Mention equipment model numbers</li>
                                        <li>• Calculate errors and deviations</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-purple-800 mb-2">Physics / Chemistry Labs</h4>
                                    <ul className="text-sm text-purple-700 space-y-1">
                                        <li>• State the principle of the experiment</li>
                                        <li>• List precautions taken</li>
                                        <li>• Include error analysis</li>
                                        <li>• Draw setup diagrams clearly</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Final Checklist</h2>
                            <div className="bg-green-50 p-5 rounded-xl">
                                <ul className="space-y-2 text-green-800">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> All sections complete (Aim, Theory, Procedure, Code/Diagram, Output, Result)</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Consistent formatting and headings</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Output screenshots or observation tables included</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Code is clean and properly commented</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Viva questions prepared at the end</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Written in your own words, not copied</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-600" /> Proofread for spelling and grammar errors</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Writing good lab records is a skill that improves with practice. Follow the standard format, pay attention
                                to details, and complete your records promptly after each lab session. Need reference lab records?
                                Check out the lab records shared by seniors on <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link>.
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
