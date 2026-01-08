import { createClient } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

export async function POST(request, { params }) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { id } = params
        const file_id = id

        // Check if already liked
        const { data: existing } = await supabase
            .from('file_likes')
            .select('*')
            .eq('file_id', file_id)
            .eq('user_id', user.id)
            .single()

        if (existing) {
            // Unlike
            await supabase
                .from('file_likes')
                .delete()
                .eq('file_id', file_id)
                .eq('user_id', user.id)

            const { data: currentFile } = await supabase.from('files').select('likes').eq('id', file_id).single()
            const newCount = Math.max(0, (currentFile?.likes || 0) - 1)

            await supabase.from('files').update({ likes: newCount }).eq('id', file_id)

            return NextResponse.json({ liked: false, likes: newCount })
        } else {
            // Like
            await supabase.from('file_likes').insert([{
                file_id,
                user_id: user.id
            }])

            const { data: currentFile } = await supabase.from('files').select('likes').eq('id', file_id).single()
            const newCount = (currentFile?.likes || 0) + 1

            await supabase.from('files').update({ likes: newCount }).eq('id', file_id)

            // Award points for receiving a like (as per gamification)
            // We need to find the uploader
            const { data: fileInfo } = await supabase.from('files').select('uploader_id').eq('id', file_id).single()
            if (fileInfo && fileInfo.uploader_id) {
                // RPC would be better but simple update for now
                const { data: uploader } = await supabase.from('profiles').select('points, likes_received').eq('id', fileInfo.uploader_id).single()
                if (uploader) {
                    await supabase.from('profiles').update({
                        points: (uploader.points || 0) + 10,
                        likes_received: (uploader.likes_received || 0) + 1
                    }).eq('id', fileInfo.uploader_id)
                }
            }

            return NextResponse.json({ liked: true, likes: newCount })
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
