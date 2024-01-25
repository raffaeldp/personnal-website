import { SanityDocument } from 'next-sanity'
import { PROJECTS_QUERY, PROJECT_QUERY } from '@/sanity/lib/queries'
import { Project } from '@/models/project'
import { sanityFetch } from '@/sanity/lib/client'

export const getAllProjects = async (
  displayAll = false
): Promise<Project[]> => {
  const projects: SanityDocument[] = await sanityFetch({
    query: PROJECTS_QUERY,
    tags: ['projects'],
    qParams: {
      isImportantValues: displayAll ? [true, false] : [true],
    },
  })

  return projects.map(
    (project): Project => ({
      _id: project._id,
      title: project.title,
      slug: project.slug.current,
      body: project.body,
      mainImage: project.mainImage,
      technologies: project.technologies,
      projectLinks: project.projectLinks,
    })
  )
}

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const project: SanityDocument = await sanityFetch({
    query: PROJECT_QUERY,
    tags: ['projects'],
    qParams: { slug },
  })

  return {
    _id: project._id,
    title: project.title,
    slug: project.slug.current,
    body: project.body,
    mainImage: project.mainImage,
    technologies: project.technologies,
    projectLinks: project.projectLinks,
  }
}
