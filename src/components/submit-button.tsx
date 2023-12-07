'use client'

import { useFormStatus } from 'react-dom'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

export function SubmitButton(props: ComponentProps<typeof Button>) {
  const { pending } = useFormStatus()

  return <Button type="submit" disabled={pending} {...props} />
}
