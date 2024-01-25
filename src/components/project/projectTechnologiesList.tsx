import { Technology } from '@/models/technology'
import Link from 'next/link'

export default function ProjectTechnologiesList({
  technologies,
}: {
  technologies: Technology[]
}) {
  return (
    <div className="h-fit w-full rounded-xl bg-base-100 p-3 shadow-xl">
      <p className="pt-1 lg:pl-4">Created using</p>
      <div className="flex h-fit flex-col gap-3 rounded-xl pt-4">
        {technologies?.map((technology, index) => (
          <Link href={technology.url} key={index} target="_blank">
            <div className="rounded-xl p-2 transition-all duration-300 hover:bg-base-200 md:p-4">
              <p className="font-bold">{technology.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
