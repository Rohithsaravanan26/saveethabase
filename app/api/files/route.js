import { createClient } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

export async function GET(request) {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)

    const category = searchParams.get('category')
    const department = searchParams.get('department')
    const year = searchParams.get('year')
    const search = searchParams.get('search')

    let query = supabase.from('files').select('*')

    if (category && category !== 'all') {
        query = query.eq('category', category)
    }
    if (department && department !== 'all') {
        query = query.eq('department', department)
    }
    if (year && year !== 'all') {
        query = query.eq('year', parseInt(year))
    }
    if (search) {
        query = query.or(`title.ilike.%${search}%,subject_name.ilike.%${search}%,subject_code.ilike.%${search}%`)
    }

    const { data, error } = await query.order('upload_date', { ascending: false })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
}

export async function POST(request) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const body = await request.json()

        // Fetch user profile to get redundant info (name, avatar) to store with file
        // This isn't strictly necessary with relation joins (which are better), but follows the user's schema where 'uploader_name' is on the files table
        const { data: profile } = await supabase
            .from('profiles')
            .select('name, avatar_url')
            .eq('id', user.id)
            .single()

        const { requestId, ...restBody } = body;

        const fileData = {
            ...restBody,
            year: parseInt(body.year) || 1,
            semester: parseInt(body.semester) || 1, // Default to 1 if missing to satisfy NOT NULL constraint
            uploader_id: user.id,
            uploader_name: profile?.name || 'Anonymous',
            uploader_avatar: profile?.avatar_url,
        }

        // ... existing insert code ...
        const { data, error } = await supabase
            .from('files')
            .insert([fileData])
            .select()
            .single()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        // Handle Request Fulfillment (if requestId is present)
        if (body.requestId) {
            // 1. Update Request Status
            const { data: request } = await supabase
                .from('requests')
                .update({ status: 'fulfilled' })
                .eq('id', body.requestId)
                .select()
                .single()

            // 2. Notify Requester
            if (request && request.requester_id) {
                await supabase.from('notifications').insert({
                    user_id: request.requester_id,
                    type: 'request',
                    title: 'Request Fulfilled!',
                    message: `Your request for "${request.title}" has been fulfilled by ${profile?.name || 'a user'}.`,
                    read: false
                })
            }
        }

        // Fetch current stats to increment (workaround for lack of RPC)
        const { data: currentStats } = await supabase
            .from('profiles')
            .select('uploads_count, points')
            .eq('id', user.id)
            .single()

        if (currentStats) {
            await supabase
                .from('profiles')
                .update({
                    uploads_count: (currentStats.uploads_count || 0) + 1,
                    points: (currentStats.points || 0) + 50
                })
                .eq('id', user.id)
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error('UNEXPECTED SERVER ERROR:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
