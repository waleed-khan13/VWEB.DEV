import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin routes protection - handled by ProtectedRoute component on client side
  // This middleware is kept simple for static checks
  
  // Allow access to login page always
  if (pathname === '/login') {
    return NextResponse.next();
  }

  // Admin routes will be protected by ProtectedRoute component
  // which checks Firebase auth state on client side
  if (pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
