'use client'

import { useEffect, useState } from 'react'

import { Movie } from '@prisma/client'

import { MovieList } from '@/components/movie-list'

type Props = {
  params: {
    genre: string
  }
}

export default function MoviesByGenrePage({ params: { genre } }: Props) {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function fetchMovies() {
      const rsp = await fetch(`/api/movies?genre=${genre}`)
      const movies = await rsp.json()
      setMovies(movies)
    }

    fetchMovies()
  }, [genre])

  return (
    <main className="container space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Movies By Genre</h2>
      <MovieList movies={movies} />
    </main>
  )
}
