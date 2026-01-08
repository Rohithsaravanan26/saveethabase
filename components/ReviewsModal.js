import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, X, Heart, MessageSquare } from 'lucide-react';
import { createClient } from '@/lib/supabase'; // Correct client-side import

// Helper for stars
const StarRating = ({ rating, size = 16, interactive = false, onRate = (n) => { } }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(n => (
            <button key={n} onClick={() => interactive && onRate(n)} disabled={!interactive} className={interactive ? 'cursor-pointer' : ''}>
                <Star size={size} className={n <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'} />
            </button>
        ))}
    </div>
);

const ReviewsModal = ({ resource, onClose, user, supabase }) => {
    const [tab, setTab] = useState('reviews');
    const [newRating, setNewRating] = useState(5);
    const [newReview, setNewReview] = useState('');
    const [newComment, setNewComment] = useState('');

    const [reviews, setReviews] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data on mount
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // Fetch reviews
            const { data: reviewsData } = await supabase
                .from('reviews')
                .select('*, profiles(name)')
                .eq('resource_id', resource.id)
                .order('created_at', { ascending: false });

            // Fetch comments
            const { data: commentsData } = await supabase
                .from('comments')
                .select('*, profiles(name)')
                .eq('resource_id', resource.id)
                .order('created_at', { ascending: false }); // Should handle nested later

            setReviews(reviewsData || []);
            setComments(commentsData || []);
            setLoading(false);
        };
        fetchData();
    }, [resource.id, supabase]);

    const handleSubmitReview = async () => {
        if (!user) return alert('Please login to review');
        const { data, error } = await supabase.from('reviews').insert({
            resource_id: resource.id,
            user_id: user.id,
            rating: newRating,
            comment: newReview
        }).select('*, profiles(name)').single();

        if (error) alert('Error submitting review: ' + error.message);
        else {
            setReviews([data, ...reviews]);
            setNewReview('');
        }
    };

    const handleSubmitComment = async () => {
        if (!user) return alert('Please login to comment');
        const { data, error } = await supabase.from('comments').insert({
            resource_id: resource.id,
            user_id: user.id,
            text: newComment
        }).select('*, profiles(name)').single();

        if (error) alert('Error submitting comment');
        else {
            setComments([data, ...comments]);
            setNewComment('');
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto flex flex-col">
                <div className="flex justify-between items-start mb-6 shrink-0">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{resource.title}</h2>
                        <div className="flex items-center gap-2">
                            <StarRating rating={resource.rating || 0} />
                            <span className="text-sm text-slate-600">{(resource.rating || 0).toFixed(1)} ({reviews.length} reviews)</span>
                        </div>
                    </div>
                    <button onClick={onClose}><X size={24} /></button>
                </div>

                <div className="flex gap-4 mb-6 border-b shrink-0">
                    <button onClick={() => setTab('reviews')} className={`pb-2 font-semibold ${tab === 'reviews' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500'}`}>
                        Reviews ({reviews.length})
                    </button>
                    <button onClick={() => setTab('comments')} className={`pb-2 font-semibold ${tab === 'comments' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500'}`}>
                        Comments ({comments.length})
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto min-h-0">
                    {loading ? <div className="p-8 text-center text-slate-500">Loading...</div> : (
                        <>
                            {tab === 'reviews' && (
                                <div className="space-y-4">
                                    <div className="bg-slate-50 rounded-2xl p-4">
                                        <h3 className="font-bold mb-3">Write a Review</h3>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-sm font-semibold">Rating:</span>
                                            <StarRating rating={newRating} size={20} interactive onRate={setNewRating} />
                                        </div>
                                        <textarea
                                            value={newReview}
                                            onChange={e => setNewReview(e.target.value)}
                                            placeholder="Share your experience..."
                                            className="w-full px-4 py-3 rounded-xl border focus:border-indigo-600 outline-none"
                                            rows={3}
                                        />
                                        <button onClick={handleSubmitReview} className="mt-3 px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold">
                                            {user ? 'Submit Review' : 'Login to Review'}
                                        </button>
                                    </div>

                                    {reviews.map(r => (
                                        <div key={r.id} className="bg-white border rounded-2xl p-4">
                                            <div className="flex justify-between mb-2">
                                                <div>
                                                    <div className="font-semibold">{r.profiles?.name || 'Anonymous'}</div>
                                                    <StarRating rating={r.rating} size={14} />
                                                </div>
                                                <span className="text-xs text-slate-400">{new Date(r.created_at).toLocaleDateString()}</span>
                                            </div>
                                            <p className="text-slate-700 mb-2">{r.comment}</p>
                                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                                <ThumbsUp size={14} />
                                                Helpful ({r.helpful_count || 0})
                                            </div>
                                        </div>
                                    ))}
                                    {reviews.length === 0 && <div className="text-center text-slate-500 p-4">No reviews yet. Be the first!</div>}
                                </div>
                            )}

                            {tab === 'comments' && (
                                <div className="space-y-4">
                                    <div className="bg-slate-50 rounded-2xl p-4">
                                        <textarea
                                            value={newComment}
                                            onChange={e => setNewComment(e.target.value)}
                                            placeholder="Ask a question or share thoughts..."
                                            className="w-full px-4 py-3 rounded-xl border focus:border-indigo-600 outline-none"
                                            rows={2}
                                        />
                                        <button onClick={handleSubmitComment} className="mt-3 px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold">
                                            {user ? 'Post Comment' : 'Login to Comment'}
                                        </button>
                                    </div>

                                    {comments.map(c => (
                                        <div key={c.id} className="bg-white border rounded-2xl p-4">
                                            <div className="flex justify-between mb-2">
                                                <div className="font-semibold">{c.profiles?.name || 'Anonymous'}</div>
                                                <div className="flex items-center gap-1 text-sm text-slate-500">
                                                    <Heart size={14} />
                                                    {c.likes || 0}
                                                </div>
                                            </div>
                                            <p className="text-slate-700 mb-2">{c.text}</p>
                                            {/* Replies could go here */}
                                        </div>
                                    ))}
                                    {comments.length === 0 && <div className="text-center text-slate-500 p-4">No comments yet.</div>}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
