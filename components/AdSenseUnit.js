import React, { useEffect } from 'react';

const AdSenseUnit = ({ slot, style }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log('AdSense error:', e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', ...style }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default AdSenseUnit;
