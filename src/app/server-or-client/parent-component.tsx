import { ChildComponent } from './child-component'

export function ParentComponent() {
  const label = 'Parent Component'
  console.log(`Rendering ${label}`)

  return (
    <main className="bg-green-400 p-12">
      <h2 className="my-6 text-4xl font-bold">{label}</h2>
      <ChildComponent />
    </main>
  )
}
