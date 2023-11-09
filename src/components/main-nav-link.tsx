import { ComponentProps } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

type Props = {
  active: boolean
  disabled?: boolean
} & ComponentProps<typeof Link>

export function MainNavLink({
  active,
  children,
  className,
  disabled,
  href,
  ...props
}: Props) {
  return (
    <Link
      className={cn(
        'flex items-center text-sm font-medium text-muted-foreground',
        className,
        {
          'text-foreground': active,
          'text-foreground/70 hover:text-foreground/90': !active,
          'pointer-events-none text-foreground/30': disabled,
        },
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
