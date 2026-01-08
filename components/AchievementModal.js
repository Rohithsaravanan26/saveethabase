import React from 'react';
import { Check } from 'lucide-react';

const AchievementModal = ({ achievement, onClose }) => {
    const colors = {
        common: 'from-slate-400 to-slate-600',
        rare: 'from-blue-400 to-blue-600',
        epic: 'from-purple-400 to-purple-600',
        legendary: 'from-yellow-400 to-orange-600'
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center">
                <div className={`w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${colors[achievement.rarity || 'common']} flex items-center justify-center text-white shadow-2xl ${achievement.unlocked ? 'animate-bounce' : 'grayscale'}`}>
                    <div className="scale-150">
                        {/* Render icon if passed as element, or text */}
                        {achievement.icon}
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">{achievement.name}</h2>
                <p className="text-slate-600 mb-6">Upload {achievement.max} resources</p>
                {achievement.unlocked ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6">
                        <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold">
                            <Check size={20} />
                            Achievement Unlocked!
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-semibold">Progress</span>
                            <span className="text-sm font-bold text-indigo-600">{achievement.progress} / {achievement.max}</span>
                        </div>
                        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-indigo-600 to-violet-600" style={{ width: `${Math.min((achievement.progress / achievement.max) * 100, 100)}%` }}></div>
                        </div>
                    </div>
                )}
                <div className="inline-block px-4 py-2 bg-slate-100 rounded-full mb-4">
                    <span className="text-xs font-bold text-slate-600 uppercase">{achievement.rarity}</span>
                </div>
                <button onClick={onClose} className="w-full py-3 bg-slate-900 text-white rounded-2xl font-bold">Close</button>
            </div>
        </div>
    );
};

export default AchievementModal;
