import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import ProjectCardComponent from './project/projectCard'

export default function Projects({ projects }: { projects: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-2 gap-3 divide-y divide-blue-100">
      {projects?.length > 0 ? (
        projects.map((project) => (
          <Link key={project._id} href={`/projects/${project.slug.current}`}>
            <ProjectCardComponent
              title={project.title}
              description={project.description}
              // technologies={project.technologies}
            />
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  )
}
