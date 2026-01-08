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
        const request_id = id

        // Check if user already upvoted
        const { data: existing } = await supabase
            .from('request_upvotes')
            .select('*')
            .eq('request_id', request_id)
            .eq('user_id', user.id)
            .single()

        if (existing) {
            return NextResponse.json({ message: 'Already upvoted' }, { status: 400 })
        }

        // Add upvote
        const { error: insertError } = await supabase
            .from('request_upvotes')
            .insert([{ request_id, user_id: user.id }])

        if (insertError) throw insertError

        // Increment upvotes count
        // Note: In a real production app we might use an RPC or just rely on count of the join table, 
        // but here we are incrementing the counter on the requests table as per schema design.
        // However, Supabase doesn't support `increment` directly in JS client easily without RPC.
        // We will do a fetch-update cycle or just assume one upvote.
        // Update: user provided schema has `upvotes` integer. 

        // Let's fetch current and update (simple version)
        const { data: currentReq } = await supabase.from('requests').select('upvotes').eq('id', request_id).single()
        const newCount = (currentReq?.upvotes || 0) + 1

        const { data, error } = await supabase
            .from('requests')
            .update({ upvotes: newCount })
            .eq('id', request_id)
            .select()
            .single()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
