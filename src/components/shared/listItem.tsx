export default function ListItem({ name }: { name: string }) {
  return (
    <div className="rounded-xl p-2 transition-all duration-300 hover:bg-base-200 md:p-4">
      <p className="font-bold">{name}</p>
    </div>
  )
}
