'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MainNavLink } from '@/components/main-nav-link'
import { GenreSelector } from '@/components/genre-selector'

export function MainNav() {
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
        <GenreSelector />
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
