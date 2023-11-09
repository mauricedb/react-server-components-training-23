import { NextRequest, NextResponse } from 'next/server'

import { Genre } from '@prisma/client'

import { saveGenre } from '@/server/save-genre'

export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData()

    const genre: Genre = {
      id: +(formData.get('id') as string),
      name: formData.get('name') as string,
    }

    await saveGenre(genre)

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
