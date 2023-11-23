'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Movie } from '@prisma/client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { movieFormSchema } from '@/lib/movie-form-schema'
import { useRouter } from 'next/navigation'

async function saveMovie(movie: Movie) {
  const rsp = await fetch(`/api/movies/${movie.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })

  if (!rsp.ok) {
    throw new Error('Something went wrong saving the movie')
  }
}

type Props = {
  initialMovie: Movie
}

export function MovieForm({ initialMovie }: Props) {
  const { toast } = useToast()
  const router = useRouter()

  const onSubmit = async (movie: Movie) => {
    try {
      await saveMovie(movie)
      router.refresh()

      toast({
        title: 'Success',
        description: 'Movie updated',
      })
    } catch (error) {
      const description =
        error instanceof Error ? error.message : 'Something went wrong'
      toast({
        title: 'Oops',
        description,
        variant: 'destructive',
      })
    }
  }

  const form = useForm<z.infer<typeof movieFormSchema>>({
    resolver: zodResolver(movieFormSchema),
    defaultValues: initialMovie,
    mode: 'all',
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-1/2 space-y-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Edit Movie: {initialMovie.title}</CardTitle>
            <CardDescription>Change the movie details.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overview</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Release date</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="popularity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Popularity</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="voteAverage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vote average</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="voteCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vote count</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="reset"
              variant="outline"
              onClick={() => {
                form.reset()
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
