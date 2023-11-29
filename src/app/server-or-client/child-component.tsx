import { sleep } from '@/lib/utils'
import { prisma } from '@/lib/db'

export async function ChildComponent() {
  const label = 'Child Component'
  console.log(`Rendering ${label}`)
  await prisma.genre.findFirst()
  await sleep(1000)

  return (
    <main className="bg-red-400 p-12">
      <h2 className="my-6 text-4xl font-bold">{label}</h2>
    </main>
  )
}
