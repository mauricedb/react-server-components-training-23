import { prisma } from '@/lib/db'
import { sleep } from '@/lib/utils'
import { GenreSelector } from '@/components/genre-selector'

export async function GenreLoader() {
  const genres = await prisma.genre.findMany({ orderBy: { name: 'asc' } })
  // await sleep(5000)

  return <GenreSelector genres={genres} />
}
