import { useState } from 'react'
import { Button } from './ui/button'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-12">
      <span className="pr-6">The count value is: {count}</span>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}
