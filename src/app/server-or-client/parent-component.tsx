'use client'

import { PropsWithChildren } from 'react'

export function ParentComponent({ children }: PropsWithChildren) {
  const label = 'Parent Component'
  console.log(`Rendering ${label}`)

  return (
    <main className="bg-green-400 p-12">
      <h2
        className="my-6 text-4xl font-bold"
        onClick={() => console.log('click')}
      >
        {label}
      </h2>
      {children}
    </main>
  )
}
