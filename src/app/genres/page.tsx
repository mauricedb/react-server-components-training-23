import 'server-only'

import Link from 'next/link'

import { prisma } from '@/lib/db'
import { Button } from '@/components/ui/button'

export default async function GenresPage() {
  const genres = await prisma.genre.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return (
    <main className="container space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Movie Genres</h2>
      <div className="flex flex-col items-start gap-4">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="flex w-full items-center justify-between border-b border-gray-200 py-2"
          >
            <p className="text-lg font-semibold tracking-tight">{genre.name}</p>
            <Button variant="outline" asChild>
              <Link href={`/genres/${genre.id}`}>Edit</Link>
            </Button>
          </div>
        ))}
      </div>
    </main>
  )

  //   return (
  //     <main className="container flex-1 space-y-4 p-8 pt-6">
  //       <h2 className="text-3xl font-bold tracking-tight">Genres</h2>
  //       <div className="grid w-96 grid-cols-2 gap-1">
  //         {genres.map((genre) => {
  //           return (
  //             // <div key={genre.id} classNamex="flex items-center justify-between">
  //             <>
  //               <div className="xxw-52">{genre.name}</div>
  //               <Button
  //                 variant="link"
  //                 // onClick={() => {
  //                 //   router.push(`/genres/${genre.id}`)
  //                 // }}
  //               >
  //                 Details
  //               </Button>
  //             </>
  //             // </div>
  //           )
  //         })}
  //       </div>
  //     </main>
  //   )
}
