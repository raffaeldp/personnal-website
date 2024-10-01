import { Experience } from '@/models/experience'
import { sanityFetch } from '@/sanity/lib/client'
import { EXPERIENCES_QUERY, EXPERIENCE_QUERY } from '@/sanity/lib/queries'
import { SanityDocument } from 'next-sanity'

export const getAllExperiences = async (): Promise<Experience[]> => {
  const experiences: SanityDocument[] = await sanityFetch({
    query: EXPERIENCES_QUERY,
    tags: ['experiences'],
  })
  return experiences.map(
    (experience): Experience => ({
      id: experience._id,
      place: experience.place,
      position: experience.position,
      field: experience.field,
      startingDate: new Date(experience.startingDate),
      endingDate: experience.endingDate
        ? new Date(experience.endingDate)
        : undefined,
      city: experience.city || undefined,
      body: experience.body,
      logo: experience.logo,
      slug: experience.slug.current,
      pageLinks: experience.pageLinks,
    })
  )
}

export const getExperienceBySlug = async (
  slug: string
): Promise<Experience> => {
  const experience: SanityDocument = await sanityFetch({
    query: EXPERIENCE_QUERY,
    tags: ['experiences'],
    qParams: { slug },
  })

  return {
    id: experience._id,
    place: experience.place,
    position: experience.position,
    field: experience.field,
    startingDate: new Date(experience.startingDate),
    endingDate: experience.endingDate
      ? new Date(experience.endingDate)
      : undefined,
    city: experience.city || undefined,
    body: experience.body,
    logo: experience.logo,
    slug: experience.slug.current,
    pageLinks: experience.pageLinks,
  }
}
