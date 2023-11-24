import { Prisma } from '@prisma/client'

import { MovieList } from '@/components/movie-list'
import { prisma } from '@/lib/db'
import { MovieCard } from '@/components/movie-card'
import { ComponentProps } from 'react'

export const dynamic = 'force-dynamic'

async function getMovies() {
  const orderBy: Prisma.MovieOrderByWithRelationInput = {
    voteAverage: 'desc',
  } as const

  type MovieSelectForCard = ComponentProps<typeof MovieCard>['movie']
  const select = {
    id: true,
    title: true,
    overview: true,
    backdropPath: true,
    voteAverage: true,
    voteCount: true,
  } satisfies Pick<Prisma.MovieSelect, keyof MovieSelectForCard>

  const movies = await prisma.movie.findMany({
    orderBy,
    select,
  })

  return movies
}

export default async function MoviesPage() {
  const movies = await getMovies()

  return (
    <main className="container space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Top Rated Movies</h2>
      <MovieList movies={movies} />
    </main>
  )
}
