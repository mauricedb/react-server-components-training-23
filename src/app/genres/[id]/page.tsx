import 'server-only'

import { prisma } from '@/lib/db'
import { GenreForm } from '@/components/genre-form'

type Props = {
  params: {
    id: string
  }
}

async function GenrePage({ params: { id } }: Props) {
  const genre = await prisma.genre.findFirstOrThrow({
    where: { id: +id },
  })

  return (
    <main className="container">
      <GenreForm genre={genre} />
    </main>
  )
}

export default GenrePage
