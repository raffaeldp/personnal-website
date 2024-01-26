import { Project } from '@/models/project'
import TechnologyTag from '../technologies/technologyTag'

export default function ProjectCardComponent({
  title,
  technologies,
}: Partial<Project>) {
  const MAX_TECHNOLOGIES = 2

  return (
    <div className="card card-compact w-96 rounded-xl bg-base-100 shadow-xl transition-transform duration-300 animate-in slide-in-from-top-4 hover:z-10 hover:scale-105">
      <figure>
        <div className="flex h-20 w-full items-center justify-start px-4 pt-4">
          <h2 className="text-3xl">{title}</h2>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex flex-wrap gap-2">
          {technologies
            ?.slice(0, MAX_TECHNOLOGIES)
            .map((technology, index) => (
              <TechnologyTag key={index} name={technology.name} />
            ))}
          {technologies && technologies?.length > MAX_TECHNOLOGIES ? (
            <TechnologyTag
              name={`+${technologies.length - MAX_TECHNOLOGIES} ...`}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
