import Project from '@/components/project'
import { getAllProjects, getProjectBySlug } from '../../projects.service'

// Generate routes at build time
export async function generateStaticParams() {
  const projects = await getAllProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  // const initial = await loadQuery<SanityDocument>(PROJECT_QUERY, params)
  const project = await getProjectBySlug(params.slug)

  return <Project project={project} />
}
