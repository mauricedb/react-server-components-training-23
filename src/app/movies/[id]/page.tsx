import React from 'react'

import { Movie } from '@prisma/client'

import { MovieForm } from '@/components/movie-form'

type Props = {
  params: {
    id: string
  }
}

async function MoviePage({ params: { id } }: Props) {
  const rsp = await fetch(`http://localhost:3000/api/movies/${id}`)
  const movie: Movie = await rsp.json()

  if (!movie) {
    return (
      <main className="flex flex-grow items-center justify-center">
        Loading movie ...
      </main>
    )
  }

  return (
    <main className="container">
      <MovieForm initialMovie={movie} />
    </main>
  )
}

export default MoviePage
