'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setShowBanner(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };

    const rejectNonEssential = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 animate-slideUp">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-sm mb-1">🍪 We use cookies</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">
                            We use cookies for authentication and to display advertisements via Google AdSense.
                            Third-party cookies may be used for personalized ads.
                            Read our <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link> for details.
                        </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                        <button
                            onClick={rejectNonEssential}
                            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                        >
                            Essential Only
                        </button>
                        <button
                            onClick={acceptAll}
                            className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
