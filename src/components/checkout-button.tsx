'use client'

import { Button } from '@/components/ui/button'
import { useShoppingCart } from '@/components/shopping-cart'

export function CheckoutButton() {
  const { itemCount, checkout } = useShoppingCart()

  return (
    <Button onClick={checkout} disabled={!itemCount}>
      Checkout
    </Button>
  )
}
