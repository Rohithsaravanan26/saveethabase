import React, { useState } from 'react';
import { Settings, X, Bell, Check, Trophy, Star, Download, MessageSquare, Heart, Info, Upload } from 'lucide-react';

const NotificationCenter = ({ notifications, onClose, onMarkAsRead, onMarkAllAsRead }) => {
    const [filter, setFilter] = useState('all');
    const [showSettings, setShowSettings] = useState(false);

    const filteredNotifs = filter === 'unread' ? notifications.filter(n => !n.read) : notifications;
    const unreadCount = notifications.filter(n => !n.read).length;

    const getIcon = (notif) => {
        // Map icon string or type to actual component
        // In a real app the type would dictate the icon, but here we might get a React Node or a string type
        // For simplicity let's handle common types
        switch (notif.type) {
            case 'achievement': return <Trophy size={20} />;
            case 'review': return <Star size={20} />;
            case 'download': return <Download size={20} />;
            case 'comment': return <MessageSquare size={20} />;
            case 'request': return <Check size={20} />;
            case 'like': return <Heart size={20} />;
            case 'system': return <Info size={20} />;
            default: return <Bell size={20} />;
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="p-6 border-b shrink-0">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Notifications</h2>
                            <p className="text-sm text-slate-600">{unreadCount} unread</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => setShowSettings(!showSettings)} className="p-2 hover:bg-slate-100 rounded-xl">
                                <Settings size={20} />
                            </button>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl">
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-xl font-semibold text-sm ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>
                                All ({notifications.length})
                            </button>
                            <button onClick={() => setFilter('unread')} className={`px-4 py-2 rounded-xl font-semibold text-sm ${filter === 'unread' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>
                                Unread ({unreadCount})
                            </button>
                        </div>
                        {unreadCount > 0 && (
                            <button onClick={onMarkAllAsRead} className="text-sm font-semibold text-indigo-600">
                                Mark all as read
                            </button>
                        )}
                    </div>
                </div>

                {showSettings && (
                    <div className="p-6 bg-slate-50 border-b shrink-0">
                        <h3 className="font-bold mb-4">Notification Preferences</h3>
                        <div className="space-y-3">
                            {['Reviews', 'Comments', 'Downloads', 'Achievements'].map(pref => (
                                <div key={pref} className="flex justify-between">
                                    <span className="text-sm">{pref}</span>
                                    <div className="w-12 h-6 bg-indigo-600 rounded-full cursor-pointer"><div className="w-5 h-5 bg-white rounded-full translate-x-6 mt-0.5 ml-0.5"></div></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="overflow-y-auto p-0 flex-1">
                    {filteredNotifs.length === 0 ? (
                        <div className="p-12 text-center h-full flex flex-col items-center justify-center">
                            <Bell size={48} className="mx-auto mb-4 text-slate-300" />
                            <h3 className="text-lg font-bold mb-2">All caught up!</h3>
                            <p className="text-slate-600">No notifications</p>
                        </div>
                    ) : (
                        <div className="divide-y">
                            {filteredNotifs.map((notif) => (
                                <div key={notif.id} className={`p-6 hover:bg-slate-50 ${!notif.read ? 'bg-indigo-50/50' : ''}`}>
                                    <div className="flex gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${notif.color || 'bg-slate-500'}`}>
                                            {getIcon(notif)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1">
                                                <h4 className="font-bold">{notif.title}</h4>
                                                {!notif.read && <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>}
                                            </div>
                                            <p className="text-sm text-slate-600 mb-2">{notif.message}</p>
                                            <div className="flex justify-between">
                                                <span className="text-xs text-slate-500">{new Date(notif.created_at).toLocaleString()}</span>
                                                {!notif.read && (
                                                    <button onClick={() => onMarkAsRead(notif.id)} className="text-xs font-semibold text-slate-500">
                                                        Mark as read
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationCenter;
