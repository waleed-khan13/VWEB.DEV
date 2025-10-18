
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('admin-authenticated');
  const isAuthenticated = cookie?.value === 'true';
  const { pathname } = request.nextUrl;

  // If user is trying to access an admin route and is not authenticated, redirect to login
  if (pathname.startsWith('/admin') && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect_to', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If user is authenticated and tries to access the login page, redirect to admin dashboard
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
