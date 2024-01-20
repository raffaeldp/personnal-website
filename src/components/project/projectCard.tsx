import Link from 'next/link'

export type ProjectCardComponentProps = {
  title: string
  description: string
  technologies?: string[]
}

export default function ProjectCardComponent({
  title,
  description,
  technologies,
}: ProjectCardComponentProps) {
  return (
    <div className="card card-compact w-96 bg-base-100 bg-opacity-50 shadow-xl">
      <figure>
        <div className="flex h-20 w-full items-center justify-start px-4 pt-4">
          <h2 className="text-3xl">{title}</h2>
        </div>
      </figure>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="flex flex-wrap">
        {technologies?.map((technology, index) => (
          <div key={index} className="badge badge-secondary badge-outline">
            {technology}
          </div>
        ))}
      </div>
    </div>
  )
}
