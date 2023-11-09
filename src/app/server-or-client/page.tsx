import { ParentComponent } from './parent-component'

export default function ServerOrClientPage() {
  const label = 'Server Or Client Page'
  console.log(`Rendering ${label}`)

  return (
    <main className="bg-blue-400 p-12">
      <h1 className="my-6 text-4xl font-bold">{label}</h1>
      <ParentComponent />
    </main>
  )
}
