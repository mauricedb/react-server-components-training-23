'use client'

import { useFormState } from 'react-dom'

import { Genre } from '@prisma/client'

import { cn } from '@/lib/utils'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SubmitButton } from './submit-button'

type Props = {
  genre: Genre
  onSubmit: (state: string, formData: FormData) => Promise<string>
}

export function GenreForm({ genre, onSubmit }: Props) {
  const [errorMessage, action] = useFormState(onSubmit, '')

  return (
    <form action={action} className="mx-auto w-1/2">
      <Card>
        <CardHeader>
          <CardTitle>Edit Movie Genre</CardTitle>
          <CardDescription>Change the name of the movie genre.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Input name="id" value={genre.id} type="hidden" />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Name of the movie genre"
                defaultValue={genre.name}
                className={cn({
                  'ring-2 ring-red-500 focus-visible:ring-red-500':
                    !!errorMessage,
                })}
              />
              {!!errorMessage ? (
                <div className="ml-1 text-xs font-medium text-red-500">
                  {errorMessage}
                </div>
              ) : null}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="reset" variant="outline">
            Cancel
          </Button>
          <SubmitButton>Save Changes</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  )
}
