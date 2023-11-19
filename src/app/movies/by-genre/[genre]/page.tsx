import { Movie } from '@prisma/client'

import { MovieList } from '@/components/movie-list'

type Props = {
  params: {
    genre: string
  }
}

export default async function MoviesByGenrePage({ params: { genre } }: Props) {
  const rsp = await fetch(`http://localhost:3000/api/movies?genre=${genre}`)
  const movies: Movie[] = await rsp.json()

  return (
    <main className="container space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Movies By Genre</h2>
      <MovieList movies={movies} />
    </main>
  )
}
