import React, { useEffect } from 'react';

const AdUnit = ({ variant = 'native', slotId, className = '' }) => {
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    if (process.env.NODE_ENV === 'development') {
        return (
            <div className={`bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-slate-400 font-bold text-sm ${className} ${variant === 'native' ? 'h-32' : 'h-64'}`}>
                ADVERTISEMENT ({variant})
            </div>
        );
    }

    // Native In-Feed Ad Style
    if (variant === 'native') {
        return (
            <div className={`glass-panel rounded-2xl p-4 my-4 ${className} relative overflow-hidden`}>
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-slate-100 text-[10px] font-bold text-slate-500 rounded-md uppercase tracking-wider">
                    Ad
                </div>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-fb+5w+4e-db+86"
                    data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
                    data-ad-slot={slotId || "1234567890"} // Replace with native slot ID
                />
            </div>
        );
    }

    // Sidebar / Rectangular Ad
    return (
        <div className={`rounded-2xl overflow-hidden my-4 ${className}`}>
            <div className="text-center text-[10px] text-slate-400 uppercase tracking-widest mb-1">Advertisement</div>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
                data-ad-slot={slotId || "0987654321"} // Replace with banner slot ID
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdUnit;
