import { createClient } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

export async function GET(request) {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')

    let query = supabase
        .from('requests')
        .select('*')
        .eq('status', 'pending')

    if (search) {
        query = query.or(`title.ilike.%${search}%,subject_name.ilike.%${search}%,subject_code.ilike.%${search}%`)
    }

    const { data, error } = await query.order('upvotes', { ascending: false })

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

        const { data: profile } = await supabase
            .from('profiles')
            .select('name')
            .eq('id', user.id)
            .single()

        const requestData = {
            ...body,
            year: body.year ? parseInt(body.year) : null, // Ensure int
            requester_id: user.id,
            requester_name: profile?.name || 'Anonymous'
        }

        const { data, error } = await supabase
            .from('requests')
            .insert([requestData])
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
