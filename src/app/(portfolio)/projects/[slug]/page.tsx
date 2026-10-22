import ProjectPage from '@/components/project/projectPage'
import { getProjectBySlug } from '../../projects.service'
import { generateStaticSlugs } from '@/sanity/lib/client'

// Generate routes at build time
export async function generateStaticParams() {
  return await generateStaticSlugs('project')
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  return <ProjectPage project={project} />
}
