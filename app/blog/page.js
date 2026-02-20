import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Lightbulb, GraduationCap, Brain, Target, Users, Timer, Calculator, XCircle, FileText, Smartphone, FileCode, MessageCircle, Award, Laptop, Mic } from 'lucide-react';

export const metadata = {
    title: 'Blog - Study Tips & Academic Guides | SaveethaBase',
    description: 'Expert study tips, exam preparation strategies, and academic guides for engineering students. Written by students of Saveetha Engineering College.',
};

const articles = [
    {
        slug: 'how-to-prepare-for-cia-exams',
        title: 'How to Prepare for CIA Exams: A Complete Guide',
        excerpt: 'Continuous Internal Assessment exams can make or break your semester GPA. Learn proven strategies to ace your CIA papers with smart preparation.',
        date: '2026-02-15',
        readTime: '8 min read',
        icon: <Target className="text-blue-600" size={24} />,
        category: 'Exam Prep',
    },
    {
        slug: 'how-to-score-well-in-semester-exams',
        title: 'How to Score Well in Semester Exams: 30-Day Framework',
        excerpt: 'A structured 30-day preparation framework covering subject-specific strategies, revision techniques, and exam-day tips for engineering students.',
        date: '2026-02-14',
        readTime: '10 min read',
        icon: <Award className="text-emerald-600" size={24} />,
        category: 'Exam Prep',
    },
    {
        slug: 'time-management-tips-for-engineering-students',
        title: 'Time Management Tips for Engineering Students',
        excerpt: 'Master time management with the 2-hour block method, priority matrix, and weekly planning sessions. Practical strategies to balance academics and life.',
        date: '2026-02-12',
        readTime: '9 min read',
        icon: <Timer className="text-indigo-600" size={24} />,
        category: 'Productivity',
    },
    {
        slug: 'effective-study-techniques-for-engineering',
        title: '10 Effective Study Techniques for Engineering Students',
        excerpt: 'From active recall to spaced repetition, discover science-backed study methods that top engineering students use to learn faster and retain more.',
        date: '2026-02-10',
        readTime: '10 min read',
        icon: <Brain className="text-purple-600" size={24} />,
        category: 'Study Tips',
    },
    {
        slug: 'best-free-resources-for-cse-students',
        title: 'Best Free Resources for CSE Students',
        excerpt: 'A curated list of free platforms, tools, and websites for Computer Science students covering coding practice, DSA, web development, databases, and more.',
        date: '2026-02-09',
        readTime: '8 min read',
        icon: <Laptop className="text-cyan-600" size={24} />,
        category: 'Resources',
    },
    {
        slug: 'understanding-cgpa-vs-sgpa',
        title: 'Understanding CGPA vs SGPA: A Complete Guide',
        excerpt: 'Learn the difference between CGPA and SGPA, how they are calculated with worked examples, conversion formulas, and why they matter for placements.',
        date: '2026-02-08',
        readTime: '8 min read',
        icon: <Calculator className="text-teal-600" size={24} />,
        category: 'Academics',
    },
    {
        slug: 'top-mistakes-students-make-during-exams',
        title: 'Top 10 Mistakes Students Make During Exams',
        excerpt: 'Avoid these common exam mistakes that cost engineering students marks. From poor time management to incomplete answers, learn what to fix.',
        date: '2026-02-06',
        readTime: '10 min read',
        icon: <XCircle className="text-red-500" size={24} />,
        category: 'Exam Tips',
    },
    {
        slug: 'how-to-write-lab-records',
        title: 'How to Write Perfect Lab Records: Step-by-Step Guide',
        excerpt: 'A comprehensive guide to writing lab records that score full marks. Includes formatting tips, common mistakes, and department-specific advice.',
        date: '2026-02-05',
        readTime: '7 min read',
        icon: <Lightbulb className="text-amber-500" size={24} />,
        category: 'Guides',
    },
    {
        slug: 'how-to-use-previous-year-questions',
        title: 'How to Use Previous Year Questions Effectively',
        excerpt: 'Learn the strategic approach to PYQ analysis that top-scoring students use — frequency tables, format identification, and timed practice.',
        date: '2026-02-04',
        readTime: '9 min read',
        icon: <FileText className="text-blue-500" size={24} />,
        category: 'Study Tips',
    },
    {
        slug: 'digital-note-taking-vs-handwritten-notes',
        title: 'Digital Note-Taking vs Handwritten Notes: Which is Better?',
        excerpt: 'A science-backed comparison of digital and handwritten note-taking. Pros, cons, best tools, and the hybrid approach for engineering students.',
        date: '2026-02-02',
        readTime: '8 min read',
        icon: <Smartphone className="text-cyan-600" size={24} />,
        category: 'Study Tips',
    },
    {
        slug: 'how-to-prepare-for-lab-viva',
        title: 'How to Prepare for Lab Viva: Department-Wise Guide',
        excerpt: 'Comprehensive guide to lab viva preparation with general strategies and department-specific tips for CSE, ECE, MECH, CIVIL, and EEE students.',
        date: '2026-02-01',
        readTime: '9 min read',
        icon: <Mic className="text-orange-500" size={24} />,
        category: 'Exam Prep',
    },
    {
        slug: 'how-to-prepare-mini-project-report',
        title: 'How to Prepare a Mini Project Report: Complete Guide',
        excerpt: 'Step-by-step guide to writing a professional mini project report. Covers structure, formatting, chapter-by-chapter guidance, and common mistakes.',
        date: '2026-01-30',
        readTime: '11 min read',
        icon: <FileCode className="text-emerald-600" size={24} />,
        category: 'Guides',
    },
    {
        slug: 'semester-exam-preparation-strategy',
        title: 'The Ultimate Semester Exam Preparation Strategy',
        excerpt: 'A complete 30-day study plan for semester exams. Covers time management, resource selection, revision cycles, and last-minute preparation tips.',
        date: '2026-01-28',
        readTime: '12 min read',
        icon: <GraduationCap className="text-green-600" size={24} />,
        category: 'Exam Prep',
    },
    {
        slug: 'how-to-create-effective-study-group',
        title: 'How to Create an Effective Study Group',
        excerpt: 'Learn how to form and run productive study groups with the right members, clear structure, and shared resources for collaborative success.',
        date: '2026-01-25',
        readTime: '8 min read',
        icon: <Users className="text-violet-600" size={24} />,
        category: 'Learning',
    },
    {
        slug: 'collaborative-learning-benefits',
        title: 'The Power of Collaborative Learning in Engineering',
        excerpt: 'Why studying with peers and sharing resources leads to better academic outcomes. Learn how platforms like SaveethaBase enable community-driven learning.',
        date: '2026-01-20',
        readTime: '6 min read',
        icon: <Users className="text-indigo-600" size={24} />,
        category: 'Learning',
    },
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="sticky top-0 z-50 glass border-b border-white/20 shadow-lg">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity">
                        ← SaveethaBase
                    </Link>
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Blog</span>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-12">
                <section className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Study Tips & <span className="text-gradient">Academic Guides</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert advice, study strategies, and practical guides to help engineering students
                        excel in their academics. Written by students, for students.
                    </p>
                </section>

                <div className="space-y-6">
                    {articles.map((article) => (
                        <Link key={article.slug} href={`/blog/${article.slug}`}>
                            <article className="bg-white rounded-2xl shadow-md border border-slate-200/60 p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer mb-6">
                                <div className="flex gap-5">
                                    <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                                        {article.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold uppercase tracking-wider">{article.category}</span>
                                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                                <Calendar size={12} /> {new Date(article.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                                <Clock size={12} /> {article.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{article.title}</h2>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-3">{article.excerpt}</p>
                                        <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read article <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>

            <footer className="bg-slate-900 text-white py-8 mt-12">
                <div className="max-w-5xl mx-auto px-6 text-center text-slate-400 text-sm">
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
