import ProjectPage from '@/components/project/projectPage'
import { getProjectBySlug } from '../../projects.service'
import { generateStaticSlugs } from '@/sanity/lib/client'

// Generate routes at build time
export async function generateStaticParams() {
  return await generateStaticSlugs('project')
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)

  return <ProjectPage project={project} />
}
