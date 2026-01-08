'use client'

import React, { useState, useEffect } from 'react';
import { Search, Upload, Bell, Heart, Share2, FileText, BookOpen, ThumbsUp, Download, Filter, X, Plus, Loader2, CheckCircle, AlertCircle, LogOut, Trophy, Clock, Sparkles, MessageSquare, Award } from 'lucide-react';
import { createClient } from '@/lib/supabase';
import NotificationCenter from '@/components/NotificationCenter';
import ReviewsModal from '@/components/ReviewsModal';
import AchievementModal from '@/components/AchievementModal';
import AdWallModal from '@/components/AdWallModal';
import AdSenseUnit from '@/components/AdSenseUnit';

// Initialize Supabase Client
// Initialize Supabase Client
const supabase = createClient();

// Mock Data & Definitions
const MOCK_NOTIFICATIONS = [
  { id: 'n1', type: 'achievement', title: 'Achievement Unlocked!', message: 'You earned "First Steps" badge', read: false, created_at: new Date().toISOString() },
  { id: 'n2', type: 'review', title: 'New Review', message: 'Priya rated your resource 5 stars', read: false, created_at: new Date(Date.now() - 900000).toISOString() },
  { id: 'n3', type: 'download', title: '100 Downloads!', message: 'Your DBMS Notes reached 100 downloads', read: true, created_at: new Date(Date.now() - 3600000).toISOString() }
];

const ACHIEVEMENTS_DEF = [
  { id: 'first_steps', name: 'First Steps', max: 1, rarity: 'common', icon: <Upload size={24} />, progress: 1, unlocked: true },
  { id: 'helpful_hand', name: 'Helpful Hand', max: 5, rarity: 'rare', icon: <Heart size={24} />, progress: 3, unlocked: false },
  { id: 'knowledge_sharer', name: 'Knowledge Sharer', max: 10, rarity: 'epic', icon: <BookOpen size={24} />, progress: 2, unlocked: false },
  { id: 'legend', name: 'Legend', max: 50, rarity: 'legendary', icon: <Trophy size={24} />, progress: 0, unlocked: false }
];
// --- Modal Components ---

const DownloadModal = ({ show, onClose, onDownload, processing, countdown, statusMessage, downloadReady }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-1">Preparing Your Download</h2>
              <p className="text-blue-100 text-sm">Please wait while we secure your file</p>
            </div>
            <button onClick={onClose} className="text-white hover:text-blue-100 transition-colors">
              <X size={28} />
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center justify-center mb-6 py-8">
            <div className="relative w-40 h-40 mb-6">
              <svg className="transform -rotate-90 w-40 h-40">
                <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                <circle
                  cx="80" cy="80" r="70"
                  stroke="url(#gradient)" strokeWidth="10" fill="none"
                  strokeDasharray={439.6}
                  strokeDashoffset={439.6 * (countdown / 10)}
                  className="transition-all duration-1000" strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{countdown}</span>
                <span className="text-sm text-gray-500 font-medium">seconds</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="animate-pulse" size={18} />
              <p className="font-semibold">{statusMessage}</p>
            </div>
          </div>

          <button
            onClick={onDownload}
            disabled={!downloadReady}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${downloadReady
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            {downloadReady ? (
              <>
                <Download size={24} />
                Download Now
              </>
            ) : (
              <>
                <Loader2 size={24} className="animate-spin" />
                Please Wait...
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const UploadModal = ({ show, onClose, form, setForm, onSubmit, uploading }) => {
  if (!show) return null;
  const categories = ['PYQ', 'CIA Paper', 'Study Material', 'Lab Record', 'Project File'];
  const departments = ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT'];
  const years = [1, 2, 3, 4];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-1">Upload Resource</h2>
              <p className="text-blue-100 text-sm">Share knowledge with your peers</p>
            </div>
            <button onClick={onClose} className="text-white hover:text-blue-100 transition-colors">
              <X size={28} />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Resource Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Data Structures CIA 2 Paper"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject Name *</label>
              <input type="text" value={form.subjectName} onChange={(e) => setForm({ ...form, subjectName: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject Code *</label>
              <input type="text" value={form.subjectCode} onChange={(e) => setForm({ ...form, subjectCode: e.target.value.toUpperCase() })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl uppercase" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl">
              <option value="">Category</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl">
              <option value="">Dept</option>
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl">
              <option value="">Year</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer">
            <input type="file" accept=".pdf,.docx" onChange={handleFileChange} className="hidden" id="file-upload" />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="mx-auto text-blue-600 mb-3" size={48} />
              <p className="text-base text-gray-700 font-semibold mb-1">{form.file ? form.file.name : 'Click to upload'}</p>
              <p className="text-[10px] text-orange-600 mt-2 font-medium">⚠️ Max 10MB (Cloudinary limit). Large files may have download issues.</p>
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button onClick={onClose} className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold">Cancel</button>
            <button
              onClick={onSubmit}
              disabled={uploading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold flex justify-center items-center gap-2"
            >
              {uploading ? <Loader2 className="animate-spin" /> : 'Publish Resource'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileModal = ({ show, onClose, user, onSignOut }) => {
  if (!show) return null;

  const achievements = [
    { id: 'first_steps', name: 'First Steps', max: 1, rarity: 'common', icon: <Upload size={24} />, progress: user?.uploads_count || 0, unlocked: (user?.uploads_count || 0) >= 1 },
    { id: 'helpful_hand', name: 'Helpful Hand', max: 5, rarity: 'rare', icon: <Heart size={24} />, progress: user?.likes_received || 0, unlocked: (user?.likes_received || 0) >= 5 },
    { id: 'knowledge_sharer', name: 'Knowledge Sharer', max: 10, rarity: 'epic', icon: <BookOpen size={24} />, progress: user?.uploads_count || 0, unlocked: (user?.uploads_count || 0) >= 10 },
    { id: 'legend', name: 'Legend', max: 50, rarity: 'legendary', icon: <Trophy size={24} />, progress: user?.points || 0, unlocked: (user?.points || 0) >= 1000 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <img src={user?.avatar_url || `https://ui-avatars.com/api/?name=${user?.name}`} className="w-20 h-20 rounded-full" />
          <div>
            <h3 className="text-2xl font-bold">{user?.name}</h3>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-xl"><div className="font-bold text-2xl">{user?.points || 0}</div><div className="text-sm text-gray-500">Points</div></div>
          <div className="text-center p-4 bg-gray-50 rounded-xl"><div className="font-bold text-2xl">{user?.uploads_count || 0}</div><div className="text-sm text-gray-500">Uploads</div></div>
          <div className="text-center p-4 bg-gray-50 rounded-xl"><div className="font-bold text-2xl">{user?.likes_received || 0}</div><div className="text-sm text-gray-500">Likes</div></div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-3 flex items-center gap-2"><Trophy size={18} className="text-yellow-500" /> Achievements</h4>
          <div className="grid grid-cols-4 gap-2">
            {achievements.map(d => (
              <div
                key={d.id}
                className={`aspect-square rounded-xl flex items-center justify-center cursor-pointer transition-all ${d.unlocked ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-300 contrast-50'}`}
                title={d.name}
              >
                {d.icon}
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => { onSignOut(); onClose(); }} className="w-full px-6 py-3 bg-red-600 text-white rounded-xl font-semibold">Sign Out</button>
        <button onClick={onClose} className="mt-4 w-full text-gray-500">Close</button>
      </div>
    </div>
  );
};

const RequestModal = ({ show, onClose, form, setForm, onSubmit }) => {
  if (!show) return null;
  const categories = ['PYQ', 'CIA Paper', 'Study Material', 'Lab Record', 'Project File'];
  const departments = ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT'];
  const years = [1, 2, 3, 4];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Request a Resource</h3>
        <input type="text" placeholder="Title" className="w-full p-3 border rounded-xl mb-3" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Description" className="w-full p-3 border rounded-xl mb-3" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <div className="grid grid-cols-2 gap-3 mb-3">
          <input type="text" placeholder="Subject Name" className="w-full p-3 border rounded-xl" value={form.subjectName} onChange={e => setForm({ ...form, subjectName: e.target.value })} />
          <input type="text" placeholder="Subject Code" className="w-full p-3 border rounded-xl" value={form.subjectCode} onChange={e => setForm({ ...form, subjectCode: e.target.value.toUpperCase() })} />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full p-3 border rounded-xl">
            <option value="">Category</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="w-full p-3 border rounded-xl">
            <option value="">Dept</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full p-3 border rounded-xl">
            <option value="">Year</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 p-3 border rounded-xl">Cancel</button>
          <button onClick={onSubmit} className="flex-1 p-3 bg-blue-600 text-white rounded-xl">Submit Request</button>
        </div>
      </div>
    </div>
  );
};

export default function SaveethaBase() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('resources');

  // Data States
  const [files, setFiles] = useState([]);
  const [requests, setRequests] = useState([]);
  const [filesLoading, setFilesLoading] = useState(false);

  // UI States
  const [searchQuery, setSearchQuery] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // Interaction States
  // Interaction States
  const [selectedFile, setSelectedFile] = useState(null);
  const [countdown, setCountdown] = useState(15);
  const [downloadReady, setDownloadReady] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [toast, setToast] = useState(null);
  const [uploading, setUploading] = useState(false);

  // New Feature States
  const [showNotifications, setShowNotifications] = useState(false);
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [showAdWall, setShowAdWall] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Computed Achievements
  const achievements = [
    { id: 'first_steps', name: 'First Steps', max: 1, rarity: 'common', icon: <Upload size={24} />, progress: user?.uploads_count || 0, unlocked: (user?.uploads_count || 0) >= 1 },
    { id: 'helpful_hand', name: 'Helpful Hand', max: 5, rarity: 'rare', icon: <Heart size={24} />, progress: user?.likes_received || 0, unlocked: (user?.likes_received || 0) >= 5 },
    { id: 'knowledge_sharer', name: 'Knowledge Sharer', max: 10, rarity: 'epic', icon: <BookOpen size={24} />, progress: user?.uploads_count || 0, unlocked: (user?.uploads_count || 0) >= 10 },
    { id: 'legend', name: 'Legend', max: 50, rarity: 'legendary', icon: <Trophy size={24} />, progress: user?.points || 0, unlocked: (user?.points || 0) >= 1000 }
  ];

  useEffect(() => {
    if (user) {
      fetchNotifications();
    }
  }, [user]);

  const fetchNotifications = async () => {
    const { data } = await supabase.from('notifications').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
    if (data) setNotifications(data);
  };


  // Filters
  const [filters, setFilters] = useState({
    category: 'all',
    department: 'all',
    year: 'all'
  });

  // Forms
  const [uploadForm, setUploadForm] = useState({
    title: '',
    subjectName: '',
    subjectCode: '',
    faculty: '',
    category: '',
    department: '',
    year: '',
    semester: '',
    file: null
  });

  const [requestForm, setRequestForm] = useState({
    title: '',
    description: '',
    subjectCode: '',
    subjectName: '',
    category: '',
    department: '',
    year: ''
  });
  const [showRequestForm, setShowRequestForm] = useState(false);

  const categories = ['PYQ', 'CIA Paper', 'Study Material', 'Lab Record', 'Project File'];
  const departments = ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT'];
  const years = [1, 2, 3, 4];

  const statusMessages = [
    'Scanning for integrity...',
    'Verifying file authenticity...',
    'Connecting to secure server...',
    'Preparing download package...',
    'Optimizing file transfer...',
    'Finalizing security checks...',
    'Establishing secure connection...'
  ];

  // --- Authentication ---
  useEffect(() => {
    checkUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        fetchProfile(session.user.id);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      fetchProfile(session.user.id);
    } else {
      setLoading(false);
    }
  };

  const fetchProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (data) setUser(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`
      }
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    showToast('Signed out successfully');
  };

  // --- Data Fetching ---
  useEffect(() => {
    if (activeTab === 'resources') fetchFiles();
    else fetchRequests();
  }, [activeTab, filters, searchQuery]);

  const fetchFiles = async () => {
    setFilesLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.category !== 'all') params.append('category', filters.category);
      if (filters.department !== 'all') params.append('department', filters.department);
      if (filters.year !== 'all') params.append('year', filters.year);
      if (searchQuery) params.append('search', searchQuery);

      const res = await fetch(`/api/files?${params}`);
      const data = await res.json();

      if (res.ok) {
        setFiles(data);

        // Smart Search Fallback: If no files and searching, check requests
        if (data.length === 0 && searchQuery) {
          const reqRes = await fetch(`/api/requests?search=${searchQuery}`);
          const reqData = await reqRes.json();
          if (reqRes.ok) {
            // We will store these in a specialized state or just reuse 'requests' 
            // but typically we should show them plainly. 
            // For now, let's put them in 'requests' and we can conditionally render a message.
            setRequests(reqData);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setFilesLoading(false);
    }
  };


  const fetchRequests = async () => {
    try {
      const res = await fetch('/api/requests');
      const data = await res.json();
      if (res.ok) setRequests(data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  // --- Effects ---
  useEffect(() => {
    if (showDownloadModal && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setDownloadReady(true);
      setStatusMessage('Download Ready!');
    }
  }, [showDownloadModal, countdown]);

  useEffect(() => {
    if (showDownloadModal && countdown > 0) {
      const msgTimer = setInterval(() => {
        setStatusMessage(statusMessages[Math.floor(Math.random() * statusMessages.length)]);
      }, 2000);
      return () => clearInterval(msgTimer);
    }
  }, [showDownloadModal, countdown]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // --- Handlers ---
  const handleDownloadClick = (file) => {
    if (!user) {
      showToast('Please sign in to download', 'error');
      return;
    }
    setSelectedFile(file);
    setShowAdWall(true); // Trigger AdWall instead of old modal
  };

  const handleActualDownload = () => {
    let filename = selectedFile.title || 'download';
    if (selectedFile.file_type && !filename.endsWith(`.${selectedFile.file_type}`)) {
      filename += `.${selectedFile.file_type}`;
    }

    // Cloudinary direct link if file is likely over Vercel's 4.5MB limit
    const isLargeFile = true; // Since we don't have size on the object, we assume large if it's Cloudinary

    if (isLargeFile) {
      showToast('Downloading from storage...');
      // Force download by injecting fl_attachment into Cloudinary URL
      const downloadUrl = selectedFile.file_url.replace('/upload/', '/upload/fl_attachment/');

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', filename);
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const proxyUrl = `/api/download?url=${encodeURIComponent(selectedFile.file_url)}&filename=${encodeURIComponent(filename)}`;
      const link = document.createElement('a');
      link.href = proxyUrl;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    showToast('Download started successfully!');
    setShowAdWall(false);
  };


  const handleLike = async (fileId) => {
    if (!user) {
      showToast('Please sign in to like', 'error');
      return;
    }
    // Optimistic update
    const previousFiles = [...files];
    setFiles(files.map(f => f.id === fileId ? { ...f, likes: (f.likes || 0) + 1 } : f));

    try {
      const res = await fetch(`/api/files/${fileId}/like`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to like');
      const data = await res.json();
      // Update with server data
      setFiles(files.map(f => f.id === fileId ? { ...f, likes: data.likes } : f));
      showToast(data.liked ? 'Resource liked!' : 'Unliked');
    } catch (error) {
      setFiles(previousFiles); // Revert
      showToast('Error liking file', 'error');
    }
  };

  const handleUpvote = async (requestId) => {
    if (!user) {
      showToast('Please sign in to upvote', 'error');
      return;
    }
    const previousRequests = [...requests];
    setRequests(requests.map(req =>
      req.id === requestId ? { ...req, upvotes: (req.upvotes || 0) + 1 } : req
    ));

    try {
      const res = await fetch(`/api/requests/${requestId}/upvote`, { method: 'POST' });
      if (!res.ok) {
        if (res.status === 400) throw new Error('Already upvoted');
        throw new Error('Failed to upvote');
      }
      showToast('Request upvoted!');
    } catch (error) {
      if (error.message !== 'Already upvoted') setRequests(previousRequests);
      showToast(error.message, 'error');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      showToast('Only PDF and DOCX files are allowed!', 'error');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast('File size must be less than 10MB for Cloudinary!', 'error');
      return;
    }
    setUploadForm({ ...uploadForm, file });
  };

  const handleUploadSubmit = async () => {
    if (!user) {
      showToast('Please sign in to upload', 'error');
      return;
    }
    if (!uploadForm.file || !uploadForm.title || !uploadForm.subjectCode) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    setUploading(true);
    try {
      // 1. Get Signature from backend
      const signRes = await fetch('/api/upload/sign', { method: 'POST' });
      const signData = await signRes.json();
      if (!signRes.ok) throw new Error(signData.error || 'Failed to get upload signature');

      // 2. Upload to Cloudinary Directly from browser
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('api_key', signData.apiKey);
      formData.append('timestamp', signData.timestamp);
      formData.append('signature', signData.signature);
      formData.append('folder', 'saveethabase');

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${signData.cloudName}/auto/upload`, {
        method: 'POST',
        body: formData
      });
      const uploadData = await uploadRes.json();

      if (!uploadRes.ok) throw new Error(uploadData.error?.message || 'Cloudinary upload failed');

      // 2. Save Metadata to Supabase (using snake_case for DB)
      const fileData = {
        title: uploadForm.title,
        subject_name: uploadForm.subjectName,
        subject_code: uploadForm.subjectCode,
        faculty: uploadForm.faculty,
        category: uploadForm.category,
        department: uploadForm.department,
        year: parseInt(uploadForm.year),
        semester: parseInt(uploadForm.semester),
        file_url: uploadData.secure_url,
        cloudinary_public_id: uploadData.public_id,
        file_type: uploadForm.file.name.split('.').pop(),
        requestId: uploadForm.requestId // Pass requestId if it exists (for fulfillment)
      };

      const dbRes = await fetch('/api/files', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fileData)
      });

      if (!dbRes.ok) throw new Error('Database save failed');

      showToast('Resource published successfully! +50 points');
      setShowUploadModal(false);
      setUploadForm({
        title: '', subjectName: '', subjectCode: '', faculty: '',
        category: '', department: '', year: '', semester: '', file: null, requestId: null
      });
      fetchFiles(); // Refresh list
      fetchProfile(user.id); // Refresh points
      fetchRequests(); // Refresh requests (to hide fulfilled ones)
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleRequestSubmit = async () => {
    if (!user) {
      showToast('Please sign in to request', 'error');
      return;
    }
    try {
      // Use snake_case for DB
      const payload = {
        title: requestForm.title,
        description: requestForm.description,
        subject_name: requestForm.subjectName,
        subject_code: requestForm.subjectCode,
        category: requestForm.category,
        department: requestForm.department,
        year: requestForm.year ? parseInt(requestForm.year) : null
      };

      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        showToast('Request created successfully!');
        setShowRequestForm(false);
        fetchRequests();
      } else {
        throw new Error('Failed to create request');
      }
    } catch (error) {
      showToast('Failed to create request', 'error');
    }
  };

  // Inline modals removed

  return (
    <div className="min-h-screen bg-slate-50">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-slide-in ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}>
          {toast.type === 'success' ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
          <span className="font-semibold">{toast.message}</span>
        </div>
      )}

      <header className="sticky top-0 z-50 glass border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-slideIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg">
                <BookOpen className="text-white" size={26} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient tracking-tight">SaveethaBase</h1>
              <p className="text-xs text-slate-500 font-medium">Academic Excellence Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {user && (
              <button onClick={() => setShowNotifications(true)} className="relative p-3 hover:bg-white/50 rounded-xl transition-all hover:scale-110 active:scale-95 group">
                <Bell size={22} className="text-slate-700 group-hover:text-blue-600 transition-colors" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{notifications.filter(n => !n.read).length}</span>
                  </div>
                )}
              </button>
            )}
            {user ? (
              <button onClick={() => setShowProfileModal(true)} className="flex items-center gap-3 pl-2 pr-5 py-2 bg-white/80 border border-slate-200/60 rounded-full hover:shadow-lg transition-all hover:scale-105 active:scale-95 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50"></div>
                  <img src={user.avatar_url || `https://ui-avatars.com/api/?name=${user.name}&background=667eea&color=fff`} className="relative w-10 h-10 rounded-full ring-2 ring-white group-hover:ring-blue-400 transition-all" alt={user.name} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{user.name.split(' ')[0]}</span>
                  <div className="flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-500" />
                    <span className="text-xs font-semibold text-gradient-blue">{user.points} pts</span>
                  </div>
                </div>
              </button>
            ) : (
              <button onClick={signInWithGoogle} className="btn-gradient text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                <Sparkles size={18} />
                Sign In with Google
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <div className="mb-12 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Welcome back, <span className="text-gradient">{user ? user.name.split(' ')[0] : 'Student'}</span>! 👋
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover <span className="font-bold text-gradient-blue">premium study resources</span> shared by seniors and toppers.
              Accelerate your academic journey today.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 text-center hover:shadow-lg transition-all card-hover">
              <div className="text-3xl font-bold text-gradient">{files.length}</div>
              <div className="text-sm text-slate-600 font-medium">Resources</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 text-center hover:shadow-lg transition-all card-hover">
              <div className="text-3xl font-bold text-gradient-blue">{requests.length}</div>
              <div className="text-sm text-slate-600 font-medium">Active Requests</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 text-center hover:shadow-lg transition-all card-hover">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{user?.uploads_count || 0}</div>
              <div className="text-sm text-slate-600 font-medium">Your Uploads</div>
            </div>
          </div>

          {/* Search and Action Bar */}
          <div className="flex gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors z-10" size={22} />
              <input
                type="text"
                placeholder="Search for subjects, codes, topics, or materials..."
                className="w-full pl-14 pr-6 py-5 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl shadow-md focus:shadow-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-lg font-medium placeholder:text-slate-400"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="btn-gradient text-white px-10 py-5 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-3 whitespace-nowrap"
            >
              <Upload size={22} />
              Upload Resource
            </button>
          </div>
        </div>

        {/* Header Banner Ad - High Visibility */}
        <div className="mb-8 animate-fadeIn">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60 max-w-4xl mx-auto">
            <div className="text-xs text-slate-400 text-center mb-2 font-medium">Advertisement</div>
            <div className="flex justify-center">
              <AdSenseUnit
                slot="YOUR_HEADER_BANNER_SLOT"
                style={{ display: 'block', minHeight: '90px', maxWidth: '728px', width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-72 flex-shrink-0 space-y-6 animate-slideIn">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-md border border-slate-200/60">
              <h3 className="font-bold mb-5 flex items-center gap-2 text-slate-800 text-lg">
                <Filter size={20} className="text-blue-600" />
                Filters
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Category</label>
                  <select className="w-full p-3 bg-white border-2 border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer hover:border-slate-300" onChange={e => setFilters({ ...filters, category: e.target.value })}>
                    <option value="all">All Categories</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Department</label>
                  <select className="w-full p-3 bg-white border-2 border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer hover:border-slate-300" onChange={e => setFilters({ ...filters, department: e.target.value })}>
                    <option value="all">All Departments</option>
                    {departments.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Year</label>
                  <select className="w-full p-3 bg-white border-2 border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer hover:border-slate-300" onChange={e => setFilters({ ...filters, year: e.target.value })}>
                    <option value="all">All Years</option>
                    {years.map(c => <option key={c} value={c}>Year {c}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* AdSense Unit - Sidebar */}
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-md border border-slate-200/60">
              <div className="text-xs text-slate-400 text-center mb-2 font-medium">Advertisement</div>
              <AdSenseUnit
                slot="YOUR_SIDEBAR_AD_SLOT"
                style={{ minHeight: '250px', display: 'block' }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Modern Tab Switcher */}
            <div className="flex gap-2 mb-8 bg-white/60 backdrop-blur-sm p-1.5 rounded-2xl w-fit border border-slate-200/60">
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'resources'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('requests')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'requests'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                Requests
              </button>
            </div>

            {activeTab === 'resources' ? (
              <div className="space-y-4">
                {filesLoading && <div className="text-center py-10"><Loader2 className="animate-spin mx-auto text-blue-600" size={32} /></div>}
                {!filesLoading && files.length === 0 && (
                  <div className="flex flex-col items-center gap-6 py-10 animate-fade-in">
                    {requests.length > 0 && searchQuery ? (
                      <>
                        <div className="text-center">
                          <p className="text-xl text-slate-800 font-bold mb-2">No files found for "{searchQuery}" 😕</p>
                          <p className="text-slate-500">But we found these current requests matching your search:</p>
                        </div>
                        <div className="w-full space-y-4">
                          {requests.map(req => (
                            <div key={req.id} className="bg-white p-6 rounded-3xl border border-gray-100 flex gap-6 hover:shadow-lg transition-all">
                              <div className="flex flex-col items-center gap-2 pt-1">
                                <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl"><ThumbsUp size={24} /></div>
                                <span className="font-bold text-lg text-slate-700">{req.upvotes || 0}</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-xl text-slate-800 mb-2">{req.title}</h3>
                                <p className="text-slate-600 mb-3">{req.description}</p>
                                <button
                                  onClick={() => {
                                    setUploadForm(prev => ({
                                      ...prev, title: req.title, subjectName: req.subject_name || '', subjectCode: req.subject_code || '', category: req.category || '', department: req.department || '', year: req.year || '', requestId: req.id
                                    }));
                                    setShowUploadModal(true);
                                  }}
                                  className="bg-emerald-50 text-emerald-600 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 hover:text-white transition-all"
                                >
                                  <Upload size={18} /> Fulfill this Request
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="text-center max-w-md">
                        <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Search size={40} className="text-slate-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">No results found</h3>
                        <p className="text-slate-500 mb-8">{searchQuery ? `We couldn't find any resources or requests matching "${searchQuery}".` : "No resources found. Be the first to upload!"}</p>
                        {searchQuery && (
                          <button
                            onClick={() => {
                              setRequestForm(prev => ({ ...prev, title: searchQuery }));
                              setShowRequestForm(true);
                            }}
                            className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto"
                          >
                            <Plus size={20} /> Raise a Request
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {files.map((file, index) => (
                  <React.Fragment key={file.id}>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-5">
                          <div className="bg-blue-50 p-4 rounded-2xl h-fit group-hover:bg-blue-600 transition-colors duration-300">
                            <FileText className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-1.5 group-hover:text-blue-600 transition-colors">{file.title}</h3>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500 mb-3 items-center">
                              <span className="font-semibold text-slate-700">{file.subject_name}</span>
                              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                              <span className="font-mono text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md">{file.subject_code}</span>
                              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                              <span>{new Date(file.upload_date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">{file.category}</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">{file.department}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                          <button onClick={() => handleDownloadClick(file)} className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition-all hover:shadow-lg shadow-blue-500/20 w-32">
                            <Download size={16} /> Download
                          </button>
                          <button onClick={() => { setSelectedFile(file); setShowReviewsModal(true); }} className="px-5 py-2.5 bg-white border-2 border-slate-100 text-slate-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 transition-all w-32">
                            <MessageSquare size={16} /> Reviews
                          </button>
                          <button onClick={() => handleLike(file.id)} className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all w-32 ${file.likes > 0 ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500'}`}>
                            <Heart size={16} className={file.likes > 0 ? "fill-red-500" : ""} /> {file.likes || 0}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* In-Feed Ad - Every 4th Resource */}
                    {(index + 1) % 4 === 0 && index !== files.length - 1 && (
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/60">
                        <div className="text-xs text-slate-400 text-center mb-2 font-medium">Advertisement</div>
                        <AdSenseUnit
                          slot="YOUR_INFEED_AD_SLOT"
                          style={{ display: 'block', minHeight: '250px' }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-600 text-white p-6 rounded-2xl flex justify-between items-center">
                  <div><h3 className="font-bold text-lg">Need something specific?</h3><p className="text-blue-100">Ask the community for help</p></div>
                  <button onClick={() => setShowRequestForm(true)} className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold">Create Request</button>
                </div>
                {requests.map(req => (
                  <div key={req.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-all">
                    <div className="flex flex-col items-center gap-1">
                      <button onClick={() => handleUpvote(req.id)} className="p-2 hover:bg-gray-100 rounded-lg"><ThumbsUp size={20} className="text-gray-400 hover:text-blue-600" /></button>
                      <span className="font-bold">{req.upvotes || 0}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{req.title}</h3>
                          <p className="text-gray-600 mb-2">{req.description}</p>
                          <div className="flex gap-2 text-sm text-gray-500">
                            <span>{req.subject_name}</span>
                            <span>•</span>
                            <span className="font-mono text-blue-600">{req.subject_code}</span>
                            <span>•</span>
                            <span>Requested by {req.requester_name}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setUploadForm(prev => ({
                              ...prev,
                              title: req.title,
                              subjectName: req.subject_name || '',
                              subjectCode: req.subject_code || '',
                              category: req.category || '',
                              department: req.department || '',
                              year: req.year || '',
                              requestId: req.id // Capture request ID
                            }));
                            setShowUploadModal(true);
                          }}
                          className="bg-green-600 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-green-700"
                        >
                          <Upload size={16} /> Fulfill
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Portals */}

        {/* Modal Portals */}
        {showUploadModal && <UploadModal show={showUploadModal} onClose={() => setShowUploadModal(false)} form={uploadForm} setForm={setUploadForm} onSubmit={handleUploadSubmit} uploading={uploading} />}
        {showProfileModal && <ProfileModal show={showProfileModal} onClose={() => setShowProfileModal(false)} user={user} onSignOut={signOut} />}
        {showRequestForm && <RequestModal show={showRequestForm} onClose={() => setShowRequestForm(false)} form={requestForm} setForm={setRequestForm} onSubmit={handleRequestSubmit} />}

        {/* New Modals */}
        {showNotifications && <NotificationCenter notifications={notifications} onClose={() => setShowNotifications(false)} onMarkAsRead={(id) => setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n))} onMarkAllAsRead={() => setNotifications(notifications.map(n => ({ ...n, read: true })))} />}
        {showReviewsModal && selectedFile && <ReviewsModal resource={selectedFile} onClose={() => setShowReviewsModal(false)} user={user} supabase={supabase} />}
        {showAdWall && selectedFile && <AdWallModal file={selectedFile} onClose={() => setShowAdWall(false)} onDownload={handleActualDownload} />}
        {selectedAchievement && <AchievementModal achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} />}

      </main>

      {/* Sticky Footer Banner - Continuous Visibility */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-center items-center gap-2">
            <div className="text-xs text-slate-400 font-medium">Advertisement</div>
            <AdSenseUnit
              slot="YOUR_FOOTER_BANNER_SLOT"
              style={{ display: 'inline-block', minHeight: '50px', maxWidth: '728px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}