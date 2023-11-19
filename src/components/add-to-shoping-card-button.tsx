'use client'

import { useShoppingCart } from './shopping-cart'
import { Button } from './ui/button'

type Movie = {
  id: number
  title: string
}

type Props = {
  movie: Movie
}

export default function AddToShoppingCart({ movie }: Props) {
  const { addMovie } = useShoppingCart()

  return (
    <Button
      variant="secondary"
      onClick={() => addMovie({ id: movie.id, title: movie.title })}
    >
      Add to cart
    </Button>
  )
}
