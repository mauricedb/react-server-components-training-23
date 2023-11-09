import Image from 'next/image'
import Link from 'next/link'

import { Movie } from '@prisma/client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from '@/components/shopping-cart'
import { Resolve } from '@/lib/type-helpers'

type Props = {
  movie: Resolve<
    Readonly<
      Pick<
        Movie,
        | 'id'
        | 'title'
        | 'overview'
        | 'backdropPath'
        | 'voteAverage'
        | 'voteCount'
      >
    >
  >
}

export const MovieCard = ({ movie }: Props) => {
  const { addMovie } = useShoppingCart()

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription>
          Vote average: {movie.voteAverage} ({movie.voteCount} votes)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdropPath}`}
            alt="Poster"
            width={300}
            height={200}
            className="h-auto w-full object-contain pb-6"
          />
        </div>
        <p className="line-clamp-5">{movie.overview}</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button asChild variant="outline">
          <Link href={`/movies/${movie.id}`}>Edit</Link>
        </Button>
        <Button
          variant="secondary"
          onClick={() => addMovie({ id: movie.id, title: movie.title })}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
