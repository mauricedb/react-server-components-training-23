import { Movie } from '@prisma/client'

import { prisma } from '@/lib/db'

export async function saveMovie(movie: Movie) {
  await prisma.movie.update({
    data: movie,
    where: { id: movie.id },
  })
}
