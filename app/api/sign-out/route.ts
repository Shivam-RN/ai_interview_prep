// app/api/sign-out/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Delete cookie by setting it with empty value and expired date
  response.cookies.set({
    name: 'session',
    value: '',
    maxAge: 0,
    path: '/',
  });

  return response;
}
