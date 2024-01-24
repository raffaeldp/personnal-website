import Link from 'next/link'
import ProjectCardComponent from './projectCard'
import { Project } from '@/models/project'

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <main className="container mx-auto grid w-fit grid-cols-1 gap-3 divide-y divide-blue-100 md:grid-cols-2">
      {projects?.length > 0 ? (
        projects.map((project) => (
          <Link key={project._id} href={`/projects/${project.slug}`}>
            <ProjectCardComponent
              title={project.title}
              technologies={project.technologies}
            />
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  )
}
