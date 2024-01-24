export default function TechnologyTag({ name }: { name: string }) {
  return (
    <div className="badge badge-secondary badge-outline !p-3 hover:bg-neutral-content">
      <p>{name}</p>
    </div>
  )
}
