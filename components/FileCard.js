import React from 'react';
import { FileText, Download, Heart, Eye, MoreVertical, Shield, Clock } from 'lucide-react';

const FileCard = ({ file, onDownload, onLike, user }) => {
    const isLiked = file.likes && user && file.likes.includes(user.email);
    const isVerified = file.verified;

    const getFileIcon = (type) => {
        if (type.includes('pdf')) return <FileText className="text-red-500" />;
        if (type.includes('word')) return <FileText className="text-blue-500" />;
        return <FileText className="text-slate-500" />;
    };

    return (
        <div className="group glass-panel rounded-2xl p-5 hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-violet-200 relative overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex gap-4 w-full">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        {getFileIcon(file.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-800 truncate group-hover:text-violet-600 transition-colors">
                                {file.name}
                            </h3>
                            {isVerified && (
                                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                                    <Shield size={10} /> VERIFIED
                                </span>
                            )}
                        </div>

                        <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                            {file.subject_name || 'General'} • {file.department || 'Common'} • Year {file.year || 'N/A'}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                            <span className="flex items-center gap-1">
                                <Download size={12} /> {file.downloads || 0}
                            </span>
                            <span className="flex items-center gap-1">
                                <Heart size={12} className={file.likes?.length > 0 ? 'text-red-500 fill-red-500' : ''} />
                                {file.likes?.length || 0}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock size={12} /> {new Date(file.created_at).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto mt-2 md:mt-0">
                    <button
                        onClick={() => onDownload(file)}
                        className="flex-1 md:flex-none py-2 px-4 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        <Download size={16} /> <span className="md:hidden">Download</span>
                    </button>

                    <button
                        onClick={() => onLike(file.id)}
                        className={`flex-1 md:flex-none py-2 px-4 rounded-xl text-sm font-bold border transition-all flex items-center justify-center gap-2 ${isLiked
                                ? 'bg-red-50 text-red-500 border-red-100'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                            }`}
                    >
                        <Heart size={16} className={isLiked ? 'fill-red-500' : ''} />
                        <span className="md:hidden">Like</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileCard;
