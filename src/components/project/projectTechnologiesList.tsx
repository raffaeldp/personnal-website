export default function ProjectTechnologiesList({
  technologies,
}: {
  technologies: string[]
}) {
  return (
    <div className="h-fit w-full rounded-xl bg-base-100 p-3 shadow-xl">
      <p className="pt-1 lg:pl-4">Created using</p>
      <div className="flex h-fit flex-col gap-3 rounded-xl pt-4">
        {technologies?.map((technology, index) => (
          <div
            key={index}
            className="rounded-xl p-2 transition-all duration-300 hover:bg-base-200 md:p-4"
          >
            <p className="font-bold">{technology}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
