import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle, Calculator } from 'lucide-react';

export const metadata = {
    title: 'Understanding CGPA vs SGPA: A Complete Guide | SaveethaBase Blog',
    description: 'Learn the difference between CGPA and SGPA, how they are calculated, conversion formulas, and why they matter for placements and higher education.',
    keywords: ['CGPA', 'SGPA', 'GPA calculation', 'engineering grades', 'academic performance'],
    authors: [{ name: 'SaveethaBase Team' }],
};

export default function CGPAvsSGPA() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Understanding CGPA vs SGPA: A Complete Guide',
        datePublished: '2026-02-08',
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
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-xs font-bold uppercase tracking-wider">Academics</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Calendar size={14} /> February 8, 2026</span>
                        <span className="flex items-center gap-1 text-sm text-slate-400"><Clock size={14} /> 8 min read</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">By <strong className="text-slate-700">SaveethaBase Team</strong></p>

                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Understanding CGPA vs SGPA: A Complete Guide
                    </h1>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Every engineering student encounters the terms CGPA and SGPA from their very first semester, yet many don&apos;t fully understand how they&apos;re calculated or why they matter. This comprehensive guide demystifies your grade point averages, shows you exactly how they&apos;re computed, and explains their impact on your academic and professional future.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">What is SGPA?</h2>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>SGPA (Semester Grade Point Average)</strong> measures your academic performance in a single semester. It considers only the subjects you studied in that particular semester, weighted by their credit values.
                            </p>
                            <div className="bg-blue-50 p-5 rounded-xl mt-3">
                                <h4 className="font-bold text-blue-800 mb-2">SGPA Formula</h4>
                                <p className="text-blue-700 text-sm font-mono bg-white p-3 rounded-lg">SGPA = Σ (Grade Point × Credit) / Σ (Credits)</p>
                                <p className="text-blue-700 text-sm mt-2">Sum of (each subject&apos;s grade point multiplied by its credits) divided by total credits in that semester.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">What is CGPA?</h2>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>CGPA (Cumulative Grade Point Average)</strong> is your overall academic performance across all semesters combined. It gives a holistic view of your academic standing throughout your engineering degree.
                            </p>
                            <div className="bg-purple-50 p-5 rounded-xl mt-3">
                                <h4 className="font-bold text-purple-800 mb-2">CGPA Formula</h4>
                                <p className="text-purple-700 text-sm font-mono bg-white p-3 rounded-lg">CGPA = Σ (SGPA × Semester Credits) / Σ (Total Credits)</p>
                                <p className="text-purple-700 text-sm mt-2">Or equivalently: Sum of all grade points × credits across ALL semesters divided by total credits earned.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Grade Point Scale</h2>
                            <p className="text-slate-600 leading-relaxed">The grading system used by Anna University and most Tamil Nadu engineering colleges:</p>
                            <div className="overflow-x-auto mt-3">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100">
                                            <th className="border border-slate-300 px-4 py-2 text-left">Marks Range</th>
                                            <th className="border border-slate-300 px-4 py-2 text-left">Grade</th>
                                            <th className="border border-slate-300 px-4 py-2 text-left">Grade Point</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr><td className="border border-slate-300 px-4 py-2">91-100</td><td className="border border-slate-300 px-4 py-2 font-bold text-green-700">O</td><td className="border border-slate-300 px-4 py-2">10</td></tr>
                                        <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">81-90</td><td className="border border-slate-300 px-4 py-2 font-bold text-green-600">A+</td><td className="border border-slate-300 px-4 py-2">9</td></tr>
                                        <tr><td className="border border-slate-300 px-4 py-2">71-80</td><td className="border border-slate-300 px-4 py-2 font-bold text-blue-600">A</td><td className="border border-slate-300 px-4 py-2">8</td></tr>
                                        <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">61-70</td><td className="border border-slate-300 px-4 py-2 font-bold text-blue-500">B+</td><td className="border border-slate-300 px-4 py-2">7</td></tr>
                                        <tr><td className="border border-slate-300 px-4 py-2">56-60</td><td className="border border-slate-300 px-4 py-2 font-bold text-amber-600">B</td><td className="border border-slate-300 px-4 py-2">6</td></tr>
                                        <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2">50-55</td><td className="border border-slate-300 px-4 py-2 font-bold text-orange-600">C</td><td className="border border-slate-300 px-4 py-2">5</td></tr>
                                        <tr><td className="border border-slate-300 px-4 py-2">&lt;50</td><td className="border border-slate-300 px-4 py-2 font-bold text-red-600">RA</td><td className="border border-slate-300 px-4 py-2">0</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Worked Example: Calculating SGPA</h2>
                            <p className="text-slate-600 leading-relaxed">Let&apos;s calculate SGPA for a sample semester:</p>
                            <div className="overflow-x-auto mt-3">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-blue-50">
                                            <th className="border border-slate-300 px-4 py-2 text-left">Subject</th>
                                            <th className="border border-slate-300 px-4 py-2">Credits</th>
                                            <th className="border border-slate-300 px-4 py-2">Grade</th>
                                            <th className="border border-slate-300 px-4 py-2">GP</th>
                                            <th className="border border-slate-300 px-4 py-2">GP × Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600 text-center">
                                        <tr><td className="border border-slate-300 px-4 py-2 text-left">Mathematics III</td><td className="border border-slate-300 px-4 py-2">4</td><td className="border border-slate-300 px-4 py-2">A</td><td className="border border-slate-300 px-4 py-2">8</td><td className="border border-slate-300 px-4 py-2 font-bold">32</td></tr>
                                        <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2 text-left">Data Structures</td><td className="border border-slate-300 px-4 py-2">3</td><td className="border border-slate-300 px-4 py-2">A+</td><td className="border border-slate-300 px-4 py-2">9</td><td className="border border-slate-300 px-4 py-2 font-bold">27</td></tr>
                                        <tr><td className="border border-slate-300 px-4 py-2 text-left">Digital Electronics</td><td className="border border-slate-300 px-4 py-2">3</td><td className="border border-slate-300 px-4 py-2">B+</td><td className="border border-slate-300 px-4 py-2">7</td><td className="border border-slate-300 px-4 py-2 font-bold">21</td></tr>
                                        <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-2 text-left">OS Lab</td><td className="border border-slate-300 px-4 py-2">2</td><td className="border border-slate-300 px-4 py-2">O</td><td className="border border-slate-300 px-4 py-2">10</td><td className="border border-slate-300 px-4 py-2 font-bold">20</td></tr>
                                        <tr><td className="border border-slate-300 px-4 py-2 text-left">English</td><td className="border border-slate-300 px-4 py-2">2</td><td className="border border-slate-300 px-4 py-2">A</td><td className="border border-slate-300 px-4 py-2">8</td><td className="border border-slate-300 px-4 py-2 font-bold">16</td></tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-green-50 font-bold">
                                            <td className="border border-slate-300 px-4 py-2">Total</td>
                                            <td className="border border-slate-300 px-4 py-2 text-center">14</td>
                                            <td className="border border-slate-300 px-4 py-2" colSpan="2"></td>
                                            <td className="border border-slate-300 px-4 py-2 text-center text-green-700">116</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl mt-3">
                                <p className="text-green-800 font-bold">SGPA = 116 / 14 = 8.29</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Converting CGPA to Percentage</h2>
                            <p className="text-slate-600 leading-relaxed">Many companies and universities ask for percentage instead of CGPA. The standard conversion formula is:</p>
                            <div className="bg-amber-50 p-5 rounded-xl mt-3">
                                <p className="text-amber-800 font-bold font-mono">Percentage = (CGPA - 0.5) × 10</p>
                                <p className="text-amber-700 text-sm mt-2">Example: CGPA of 8.5 → (8.5 - 0.5) × 10 = 80%</p>
                            </div>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Note: Different universities may use slightly different conversion formulas. Always check your university&apos;s official formula before using this in applications.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Why Your GPA Matters</h2>
                            <div className="space-y-3 mt-3">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">Campus Placements</h4>
                                        <p className="text-slate-600 text-sm">Most companies have a CGPA cutoff (typically 7.0-7.5) for eligibility. Top product companies like Google, Microsoft, and Amazon often prefer 8.0+.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">Higher Education</h4>
                                        <p className="text-slate-600 text-sm">MS admissions in the USA, Europe, and IIT M.Tech programs heavily weigh CGPA. Most top universities expect 8.0+ CGPA for competitive programs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <h4 className="font-bold text-slate-800">Scholarships & Awards</h4>
                                        <p className="text-slate-600 text-sm">University rank, merit scholarships, and academic awards are based on CGPA. Even a 0.1 difference can affect your rank.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Tips to Maintain a High CGPA</h2>
                            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-3">
                                <li><strong>Never neglect any subject</strong> — One low grade can significantly drag down your CGPA</li>
                                <li><strong>Target high-credit subjects</strong> — A 4-credit subject impacts your GPA twice as much as a 2-credit one</li>
                                <li><strong>Start strong in first year</strong> — First-year subjects are often easier; build a high base CGPA early</li>
                                <li><strong>Use CIA marks strategically</strong> — A strong CIA score means you need fewer marks in the semester exam</li>
                                <li><strong>Clear arrears immediately</strong> — An RA grade (0 points) devastates your CGPA</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">Conclusion</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Understanding how CGPA and SGPA work empowers you to make strategic decisions about your academic preparation. Every grade matters, and consistent performance across all semesters is the key to maintaining a competitive CGPA. Use resources like <Link href="/" className="text-blue-600 hover:underline font-semibold">SaveethaBase</Link> to access quality study materials and previous year papers that help you prepare effectively.
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
