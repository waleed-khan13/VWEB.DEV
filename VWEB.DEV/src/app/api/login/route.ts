
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { passkey } = await request.json();
  const adminPasskey = process.env.ADMIN_PASSKEY;

  if (!adminPasskey) {
    return NextResponse.json({ error: 'Admin passkey is not configured on the server.' }, { status: 500 });
  }

  if (passkey === adminPasskey) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin-authenticated', 'true', {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
    });
    return response;
  } else {
    return NextResponse.json({ error: 'Invalid passkey' }, { status: 401 });
  }
}
