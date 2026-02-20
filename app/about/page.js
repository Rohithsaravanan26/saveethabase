import Link from 'next/link';
import { BookOpen, Upload, Search, Star, Users, Shield, Zap, Heart } from 'lucide-react';

export const metadata = {
    title: 'About SaveethaBase - Academic Resource Platform for Saveetha Engineering College',
    description: 'SaveethaBase is a free academic resource sharing platform built by students of Saveetha Engineering College. Access CIA papers, PYQs, study materials, lab records, and more.',
};

export default function About() {
    const features = [
        {
            icon: <Upload className="text-blue-600" size={28} />,
            title: 'Upload & Share Resources',
            description: 'Share your study materials, CIA papers, previous year questions, lab records, and project files with your peers. Earn points and achievements for every contribution.'
        },
        {
            icon: <Search className="text-purple-600" size={28} />,
            title: 'Smart Search & Filters',
            description: 'Find exactly what you need with powerful search across subjects, departments, categories, and years. Our smart search even suggests community requests when resources aren\'t available.'
        },
        {
            icon: <Star className="text-amber-500" size={28} />,
            title: 'Reviews & Ratings',
            description: 'Rate and review resources to help others find the best study materials. Quality resources rise to the top based on community feedback.'
        },
        {
            icon: <Users className="text-green-600" size={28} />,
            title: 'Community Requests',
            description: 'Can\'t find what you need? Post a request and let the community help. Upvote requests you want to see fulfilled.'
        },
        {
            icon: <Shield className="text-indigo-600" size={28} />,
            title: 'Secure & Reliable',
            description: 'Your data is protected with industry-standard security. Sign in securely with Google OAuth. All files are virus-scanned and stored safely on Cloudinary.'
        },
        {
            icon: <Zap className="text-orange-500" size={28} />,
            title: 'Gamification & Achievements',
            description: 'Earn points for uploads, likes, and contributions. Unlock achievement badges from Common to Legendary tier. Climb the leaderboard!'
        }
    ];

    const categories = [
        { name: 'Previous Year Questions (PYQ)', desc: 'Past exam papers to practice and prepare for your exams', color: 'bg-blue-50 text-blue-700 border-blue-200' },
        { name: 'CIA Papers', desc: 'Internal assessment papers from various departments and semesters', color: 'bg-purple-50 text-purple-700 border-purple-200' },
        { name: 'Study Materials', desc: 'Comprehensive notes, summaries, and guides created by toppers', color: 'bg-green-50 text-green-700 border-green-200' },
        { name: 'Lab Records', desc: 'Complete lab manuals and experiment records for practical sessions', color: 'bg-orange-50 text-orange-700 border-orange-200' },
        { name: 'Project Files', desc: 'Reference projects, documentation, and research papers', color: 'bg-pink-50 text-pink-700 border-pink-200' },
    ];

    const departments = ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT'];

    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="sticky top-0 z-50 glass border-b border-white/20 shadow-lg">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
                    <Link href="/" className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity">
                        ← SaveethaBase
                    </Link>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-12">
                {/* Hero */}
                <section className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg mb-6">
                        <BookOpen className="text-white" size={36} />
                    </div>
                    <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        About <span className="text-gradient">SaveethaBase</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        A <strong>free, student-built academic resource sharing platform</strong> for Saveetha Engineering College.
                        Access study materials, CIA papers, previous year questions, lab records, and more — all in one place.
                    </p>
                </section>

                {/* Mission */}
                <section className="bg-white rounded-3xl shadow-lg border border-slate-200/60 p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                        SaveethaBase was born from a simple idea: <strong>academic resources should be accessible to everyone</strong>.
                        Too often, students struggle to find quality study materials, past question papers, or reliable notes.
                        Existing resources are scattered across WhatsApp groups, Google Drives, and personal collections —
                        making it hard for students, especially freshers, to access them.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                        We built SaveethaBase to solve this problem. Our platform provides a <strong>centralized, organized,
                            and searchable repository</strong> where students can upload, discover, and download academic resources.
                        Whether you&apos;re looking for a specific CIA paper from last semester or comprehensive notes for your
                        upcoming exam, SaveethaBase has you covered.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        By adding gamification elements like points, achievements, and community requests, we&apos;ve made sharing
                        knowledge <strong>rewarding and collaborative</strong>. Every contribution helps future batches of students
                        succeed in their academic journey.
                    </p>
                </section>

                {/* Features */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Platform Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-md border border-slate-200/60 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resource Categories */}
                <section className="bg-white rounded-3xl shadow-lg border border-slate-200/60 p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Resource Categories</h2>
                    <p className="text-slate-600 mb-6">
                        SaveethaBase organizes resources into clear categories, making it easy to find exactly what you need:
                    </p>
                    <div className="space-y-4">
                        {categories.map((cat, i) => (
                            <div key={i} className={`p-4 rounded-xl border ${cat.color}`}>
                                <h3 className="font-bold text-base mb-1">{cat.name}</h3>
                                <p className="text-sm opacity-80">{cat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Supported Departments</h3>
                    <div className="flex flex-wrap gap-3">
                        {departments.map(dept => (
                            <span key={dept} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm">
                                {dept}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 mt-3">Resources are available for all four years (Year 1-4) across all departments.</p>
                </section>

                {/* How It Works */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Sign In', desc: 'Sign in with your Google account — quick and secure.' },
                            { step: '2', title: 'Browse or Search', desc: 'Use filters and search to find resources by subject, department, or category.' },
                            { step: '3', title: 'Download', desc: 'Download resources instantly in PDF or DOCX format.' },
                            { step: '4', title: 'Contribute', desc: 'Upload your own materials and earn points & achievements!' }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-3">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Built With Love */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
                    <Heart className="mx-auto mb-4" size={36} />
                    <h2 className="text-3xl font-bold mb-4">Built by Students, for Students</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                        SaveethaBase is a passion project built by students of Saveetha Engineering College.
                        Our goal is to make quality education accessible to every student.
                        If you find this platform helpful, spread the word and contribute your resources!
                    </p>
                    <Link href="/" className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                        Start Exploring →
                    </Link>
                </section>
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
