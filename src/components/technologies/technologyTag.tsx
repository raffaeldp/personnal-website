export default function TechnologyTag({ name }: { name: string }) {
  return (
    <div className="badge badge-secondary badge-outline hover:bg-neutral-content">
      {name}
    </div>
  )
}
