import { NextRequest, NextResponse } from "next/server";

export function apiMiddleware(request: NextRequest): NextResponse {
    if (request.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.next();
    }
    
    return NextResponse.next();
}