export default function ItemsList({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="h-fit w-full rounded-xl bg-base-100 p-3 shadow-xl">
      <p className="pt-1 lg:pl-4">{title}</p>
      <div className="flex h-fit flex-col gap-3 rounded-xl pt-4">
        {children}
      </div>
    </div>
  )
}
