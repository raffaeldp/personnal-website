import { loadQuery } from '@/sanity/lib/store'
import { SanityDocument } from 'next-sanity'
import { PROJECTS_QUERY, PROJECT_QUERY } from '@/sanity/lib/queries'
import { Project } from '@/models/project'

export const getAllProjects = async (): Promise<Project[]> => {
  const projects = await loadQuery<SanityDocument[]>(PROJECTS_QUERY)
  return projects.data.map(
    (project): Project => ({
      _id: project._id,
      title: project.title,
      slug: project.slug.current,
      body: project.body,
      mainImage: project.mainImage,
      technologies: project.technologies.map(
        (tech: { name: string }) => tech.name
      ),
    })
  )
}

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  const project = (
    await loadQuery<SanityDocument>(PROJECT_QUERY, {
      slug,
    })
  ).data
  return {
    _id: project._id,
    title: project.title,
    slug: project.slug.current,
    body: project.body,
    mainImage: project.mainImage,
    technologies: project.technologies.map(
      (tech: { name: string }) => tech.name
    ),
  }
}
