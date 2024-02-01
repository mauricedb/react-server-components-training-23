import { act, render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'

import { MovieList } from '@/components/movie-list'

type Movies = ComponentProps<typeof MovieList>['movies']

const movies: Movies = [
  {
    id: 1,
    title: 'The Godfather',
    overview: 'Overview of the The Godfather',
    backdropPath: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    voteAverage: 8.7,
    voteCount: 18176,
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    overview: 'The story of The Shawshank Redemption',
    backdropPath: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    voteAverage: 8.7,
    voteCount: 24062,
  },
]

describe('MovieList', () => {
  it('has a card with title for each movie', async () => {
    await act(() => render(<MovieList movies={movies} />))

    for (const movie of movies) {
      expect(screen.getByRole('heading', { name: movie.title })).toBeVisible()
    }
  })

  it('renders a list of movies with an Add to cart for each movie', async () => {
    await act(() => render(<MovieList movies={movies} />))

    const cartButtons = screen.getAllByRole('button', { name: 'Add to cart' })
    expect(cartButtons).toHaveLength(movies.length)
  })
})
