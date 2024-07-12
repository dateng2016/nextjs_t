import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export const middleware = (request: NextRequest) => {
    const response = NextResponse.next()
    const themePreference = request.cookies.get('theme')
    if (!themePreference) {
        response.cookies.set('theme', 'dark')
    }


    // if (request.nextUrl.pathname === "/profile") {
    //     // return NextResponse.rewrite(new URL('/hello', request.url))
    //     return NextResponse.redirect(new URL('/hello', request.url))
    // }
    // return NextResponse.redirect(new URL('/', request.url))

}

// export const config = { matcher: "/profile" }