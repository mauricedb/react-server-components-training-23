import 'server-only'

import { prisma } from '@/lib/db'
import { GenreForm } from '@/components/genre-form'
import { saveGenre } from '@/server/save-genre'
import { Genre } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { sleep } from '@/lib/utils'

type Props = {
  params: {
    id: string
  }
}

async function GenrePage({ params: { id } }: Props) {
  const genre = await prisma.genre.findFirstOrThrow({
    where: { id: +id },
  })

  const onSubmit = async (formData: FormData) => {
    'use server'
    console.log('onSubmit', formData)

    await sleep(5000)

    const genre: Genre = {
      id: +(formData.get('id') as string),
      name: formData.get('name') as string,
    }

    await saveGenre(genre)

    revalidatePath('/genres')

    redirect('/genres')
  }

  return (
    <main className="container">
      <GenreForm genre={genre} onSubmit={onSubmit} />
    </main>
  )
}

export default GenrePage
