import { act, render, screen } from '@testing-library/react'

import MoviesPage from './page'

const movies = [
  {
    backdropPath: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    id: 238,
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    popularity: 108.62,
    posterPath: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    releaseDate: '1972-03-14',
    title: 'The Godfather',
    voteAverage: 8.7,
    voteCount: 18176,
  },
  {
    backdropPath: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    id: 278,
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    popularity: 83.323,
    posterPath: '/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg',
    releaseDate: '1994-09-23',
    title: 'The Shawshank Redemption',
    voteAverage: 8.7,
    voteCount: 24062,
  },
]

describe.skip('The Top Rated Movies page', () => {
  const originalFetch = globalThis.fetch

  beforeAll(() => {
    globalThis.fetch = jest
      .fn()
      .mockResolvedValue({ json: jest.fn().mockResolvedValue(movies) })
  })

  afterAll(() => {
    globalThis.fetch = originalFetch
  })

  it('Displays the page title', async () => {
    await act(() => render(<MoviesPage />))

    expect(
      screen.getByRole('heading', { name: 'Top Rated Movies' }),
    ).toBeVisible()
  })

  it('fetches and displays movies on mount', async () => {
    await act(() => render(<MoviesPage />))

    for (const movie of movies) {
      expect(screen.getByRole('heading', { name: movie.title })).toBeVisible()
    }
  })
})
