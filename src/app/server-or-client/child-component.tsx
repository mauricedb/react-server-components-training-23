export function ChildComponent() {
  const label = 'Child Component'
  console.log(`Rendering ${label}`)

  return (
    <main className="bg-red-400 p-12">
      <h2 className="my-6 text-4xl font-bold">{label}</h2>
    </main>
  )
}
