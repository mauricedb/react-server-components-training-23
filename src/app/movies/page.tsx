'use client'

import { useEffect, useState } from 'react'

import { Movie } from '@prisma/client'

import { MovieList } from '@/components/movie-list'

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function fetchMovies() {
      const rsp = await fetch('/api/movies')
      const movies = await rsp.json()
      setMovies(movies)
    }

    fetchMovies()
  }, [])

  return (
    <main className="container space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Top Rated Movies</h2>
      <MovieList movies={movies} />
    </main>
  )
}
