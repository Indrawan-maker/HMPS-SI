import { NextResponse } from "next/server"


export const protectedPath = ["/admin", "/anggota", "/dashboard", "/event", "/seputarSI"]
export const publicPath = ["/about", "/login", "/"]


export function middleware(request) {
    const token = request.cookies.get('token')?.value;
    const path = request.nextUrl.pathname;

    const isProtected = protectedPath.some((route) => path.startsWith(route))
    const isPublic = publicPath.some(route => path.startsWith(route))

    if(!token && isPublic) {
        return NextResponse.redirect(new URL("/login", request.url ))
    }

    if(token && isPublic) {
        return NextResponse.redirect(new URL("/admin", request.url ))
    }

    return NextResponse.next()

}

export const config = {
    matcher: [
    "/admin/:path*",
    "/anggota/:path*",
    "/dashboard/:path*",
    "/event/:path*",
    "/seputarSI/:path*",
    "/login",
    "/about"]
}

