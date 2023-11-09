'use client'

import React, { useEffect, useState } from 'react'

import { Movie } from '@prisma/client'

import { MovieForm } from '@/components/movie-form'

type Props = {
  params: {
    id: string
  }
}

function MoviePage({ params: { id } }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    async function fetchMovie() {
      const rsp = await fetch(`/api/movies/${id}`)
      const movie = await rsp.json()
      setMovie(movie)
    }

    fetchMovie()
  }, [id])

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
