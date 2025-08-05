import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const isAuthenticated = false
  const { pathname } = request.nextUrl

  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  if (isAuthenticated && ["/auth/login", "/auth/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/auth/login", "/auth/register"],
}
