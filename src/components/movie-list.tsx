import { ComponentProps } from 'react'

import { MovieCard } from '@/components/movie-card'

type Movie = ComponentProps<typeof MovieCard>['movie']

type Props = {
  movies: Movie[]
}

export function MovieList({ movies }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}
