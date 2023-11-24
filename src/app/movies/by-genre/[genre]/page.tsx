import { Prisma } from '@prisma/client'

import { MovieList } from '@/components/movie-list'
import { prisma } from '@/lib/db'
import { MovieCard } from '@/components/movie-card'
import { ComponentProps } from 'react'

export const dynamic = 'force-dynamic'

type Props = {
  params: {
    genre: string
  }
}

async function getMovies(genreId: string) {
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

  const genre = await prisma.genre.findFirst({
    where: { id: +genreId },
    include: {
      movies: {
        orderBy,
        select,
      },
    },
  })

  return genre?.movies ?? []
}

export default async function MoviesByGenrePage({ params: { genre } }: Props) {
  const movies = await getMovies(genre)

  return (
    <main className="container space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Movies By Genre</h2>
      <MovieList movies={movies} />
    </main>
  )
}
