'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RotateCw } from 'lucide-react'
import { ReactNode, Suspense } from 'react'

import { MainNavLink } from '@/components/main-nav-link'

type Props = {
  genres: ReactNode
}

export function MainNav({ genres }: Props) {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">
          Boost Your Developer Potential with React Server Components
        </span>
      </Link>
      <nav className="flex gap-6">
        <MainNavLink href="/movies" active={pathname === '/movies'}>
          Movies
        </MainNavLink>
        <Suspense
          fallback={
            <RotateCw className="w-[200px] animate-spin text-foreground/40" />
          }
        >
          {genres}
        </Suspense>
        <MainNavLink href="/genres" active={pathname === '/genres'}>
          Genres
        </MainNavLink>
        <MainNavLink
          href="/server-or-client"
          active={pathname === '/server-or-client'}
        >
          Server/Client
        </MainNavLink>
      </nav>
    </div>
  )
}
