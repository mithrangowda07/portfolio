import { NextRequest, NextResponse } from 'next/server'

const blockedIPs = [
    '103.25.44.10',
]

export function middleware(req: NextRequest) {
    const forwardedFor = req.headers.get('x-forwarded-for')

    const ip = forwardedFor
        ? forwardedFor.split(',')[0]
        : 'unknown'

    console.log('Visitor IP:', ip)

    if (blockedIPs.includes(ip)) {
        return new NextResponse('Access Denied', {
            status: 403,
        })
    }

    return NextResponse.next()
}