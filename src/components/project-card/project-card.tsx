import Link from 'next/link'

export type ProjectCardComponentProps = {
  projectName: string
  description: string
  link: string
}

export default function ProjectCardComponent({
  projectName,
  description,
  link,
}: ProjectCardComponentProps) {
  return (
    <Link href={link ?? '/'}>
      <div className="card card-compact w-96 bg-base-100 bg-opacity-50 shadow-xl">
        <figure>
          <div className="flex h-20 w-full items-center justify-start px-4 pt-4">
            <h2 className="text-3xl">{projectName}</h2>
          </div>
        </figure>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}
