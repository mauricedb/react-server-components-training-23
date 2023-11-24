import { NextRequest, NextResponse } from 'next/server'

import { Movie } from '@prisma/client'

import { saveMovie } from '@/server/save-movie'

export async function PUT(request: NextRequest) {
  try {
    const movie = (await request.json()) as Movie

    await saveMovie(movie)

    return new NextResponse(null, {
      status: 204,
    })
  } catch (error) {
    console.error(error)

    return new NextResponse(null, {
      status: 400,
    })
  }
}
