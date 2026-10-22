import { generateStaticSlugs } from '@/sanity/lib/client'
import { getExperienceBySlug } from '../../experiences.service'
import ExperiencePage from '@/components/experience/experiencePage'

// Generate routes at build time
export async function generateStaticParams() {
  return await generateStaticSlugs('experience')
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const experience = await getExperienceBySlug(slug)

  return <ExperiencePage experience={experience} />
}
