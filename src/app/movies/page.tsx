import { Movie } from '@prisma/client'

import { MovieList } from '@/components/movie-list'

export const dynamic = 'force-dynamic'

export default async function MoviesPage() {
  const rsp = await fetch('http://localhost:3000/api/movies')
  const movies: Movie[] = await rsp.json()

  return (
    <main className="container space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Top Rated Movies</h2>
      <MovieList movies={movies} />
    </main>
  )
}
