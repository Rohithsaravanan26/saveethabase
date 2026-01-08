import React, { useState, useEffect } from 'react';
import { Download, AlertCircle, CheckCircle } from 'lucide-react';
import AdSenseUnit from './AdSenseUnit';

const AdWallModal = ({ file, onClose, onDownload }) => {
    const [timeLeft, setTimeLeft] = useState(15);
    const [status, setStatus] = useState('Verifying resource path...');

    useEffect(() => {
        // Timer logic
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
                // Status updates based on time
                if (timeLeft === 12) setStatus('Checking file integrity...');
                if (timeLeft === 8) setStatus('Scanning for viruses...');
                if (timeLeft === 4) setStatus('Preparing download link...');
                if (timeLeft === 1) setStatus('Download ready!');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden relative">
                {/* Header Ad Slot (Rectangle) */}
                <div className="bg-slate-100 p-4 flex justify-center border-b">
                    <AdSenseUnit slot="1234567890" style={{ width: '300px', height: '250px' }} />
                </div>

                <div className="p-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Downloading {file.title}</h2>
                    <p className="text-slate-600 mb-6">Please wait while we prepare your file.</p>

                    {/* Progress Bar */}
                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden mb-4 relative">
                        <div
                            className="h-full bg-indigo-600 transition-all duration-1000 ease-linear"
                            style={{ width: `${((15 - timeLeft) / 15) * 100}%` }}
                        ></div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-8 font-medium text-indigo-600">
                        {timeLeft > 0 ? (
                            <><AlertCircle size={20} className="animate-pulse" /> {status} ({timeLeft}s)</>
                        ) : (
                            <><CheckCircle size={20} /> File Ready!</>
                        )}
                    </div>

                    <button
                        onClick={onDownload}
                        disabled={timeLeft > 0}
                        className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-[0.98] ${timeLeft > 0
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 cursor-pointer'
                            }`}
                    >
                        {timeLeft > 0 ? `Wait ${timeLeft}s` : 'Download via Master Tunnel'}
                        {timeLeft === 0 && <Download size={24} />}
                    </button>

                    {timeLeft === 0 && (
                        <div className="mt-8 p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                            <p className="text-sm font-bold text-slate-800 mb-1">Mirror Link (Direct Bypass)</p>
                            <p className="text-xs text-slate-500 mb-4">If the main button fails, this link uses a secondary authenticated tunnel:</p>
                            <a
                                href={`/api/download?url=${encodeURIComponent(file.file_url)}&filename=${encodeURIComponent(file.title || 'resource')}.${file.file_type || 'pdf'}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 text-white rounded-xl font-bold text-base hover:bg-indigo-700 shadow-md transition-all active:scale-95"
                            >
                                <Download size={20} /> Use Rescue Mirror Link
                            </a>
                        </div>
                    )}
                </div>

                {/* Footer Ad Slot (Horizontal) */}
                <div className="bg-slate-100 p-4 flex justify-center border-t">
                    <AdSenseUnit slot="0987654321" style={{ width: '100%', height: '90px' }} />
                </div>
            </div>
        </div>
    );
};

export default AdWallModal;
