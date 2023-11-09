import Image from 'next/image'

import homeImgage from '@/images/home-image.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Image
        src={homeImgage}
        alt="Boost Your Developer Potential with React Server Components"
        width={800}
      />
    </main>
  )
}
