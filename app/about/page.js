export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-6">About SaveethaBase</h1>

                <div className="space-y-6 text-slate-700">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h2>
                        <p>SaveethaBase is a collaborative platform designed to help students share and access educational resources. We believe in the power of community-driven learning and aim to make quality study materials accessible to everyone.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">What We Offer</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>PYQ (Previous Year Questions):</strong> Access past exam papers to prepare better</li>
                            <li><strong>CIA Papers:</strong> Continuous Internal Assessment materials</li>
                            <li><strong>Study Materials:</strong> Comprehensive notes and guides</li>
                            <li><strong>Lab Records:</strong> Practical experiment documentation</li>
                            <li><strong>Project Files:</strong> Reference projects and reports</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">How It Works</h2>
                        <div className="space-y-3">
                            <p><strong>1. Upload:</strong> Share your notes, papers, and materials</p>
                            <p><strong>2. Earn Points:</strong> Get rewarded for contributing valuable content</p>
                            <p><strong>3. Download:</strong> Access resources uploaded by your peers</p>
                            <p><strong>4. Request:</strong> Can't find what you need? Request it from the community</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Built For Students, By Students</h2>
                        <p>SaveethaBase was created by students who understand the challenges of finding quality study materials. We've experienced the frustration of last-minute exam preparation and wanted to build a solution that helps everyone succeed.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Values</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Collaboration:</strong> We grow together by sharing knowledge</li>
                            <li><strong>Quality:</strong> Every resource is valuable to someone's learning</li>
                            <li><strong>Accessibility:</strong> Education should be free and open</li>
                            <li><strong>Community:</strong> Students helping students succeed</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Technology</h2>
                        <p>SaveethaBase is built with modern web technologies to ensure fast, reliable, and secure access to your study materials. We use industry-standard security practices to protect your data and files.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Contact Us</h2>
                        <p>Have questions, suggestions, or feedback? We'd love to hear from you!</p>
                        <p className="mt-2"><strong>Email:</strong> codez.ai.contact@gmail.com</p>
                    </section>

                    <section className="bg-blue-50 p-6 rounded-xl mt-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Join Our Community</h2>
                        <p className="mb-4">Start sharing and accessing quality study materials today. Sign up and become part of a growing community of learners!</p>
                        <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</a>
                    </section>
                </div>
            </div>
        </div>
    );
}
