import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://www.image2url.com/r2/default/images/1776746397505-70a6816b-9461-432e-ba0f-7b379a057038.jpeg');
    const buffer = await res.arrayBuffer();
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error fetching icon:', error);
    return new NextResponse('Error fetching icon', { status: 500 });
  }
}

