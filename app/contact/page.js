'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // For now, just show success message
        // In production, you'd send this to an API endpoint
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-slate-800 mb-6">Contact Us</h1>
                    <p className="text-slate-600 mb-8">Have a question, suggestion, or need help? We're here for you!</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Get in Touch</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-slate-700">Email</h3>
                                    <p className="text-slate-600">codez.ai.contact@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-700">Support</h3>
                                    <p className="text-slate-600">codez.ai.contact@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-700">Business Inquiries</h3>
                                    <p className="text-slate-600">codez.ai.contact@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Quick Links</h2>
                            <div className="space-y-2">
                                <a href="/privacy" className="block text-blue-600 hover:text-blue-700">Privacy Policy</a>
                                <a href="/terms" className="block text-blue-600 hover:text-blue-700">Terms of Service</a>
                                <a href="/about" className="block text-blue-600 hover:text-blue-700">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>

                    {submitted && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                            Thank you for contacting us! We'll get back to you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                            <input
                                type="text"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                            <textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows="6"
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="Tell us more..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
