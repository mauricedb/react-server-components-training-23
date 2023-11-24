import React from 'react'

import { MovieForm } from '@/components/movie-form'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Props = {
  params: {
    id: string
  }
}

async function getMovie(id: string) {
  const movie = await prisma.movie.findFirstOrThrow({
    where: { id: +id },
  })

  return movie
}

async function MoviePage({ params: { id } }: Props) {
  const movie = await getMovie(id)

  return (
    <main className="container">
      <MovieForm initialMovie={movie} />
    </main>
  )
}

export default MoviePage
