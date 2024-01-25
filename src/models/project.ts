import { Image, PortableTextBlock } from 'sanity'
import { ProjectLink } from './projectLink'
import { Technology } from './technology'

export type Project = {
  _id: string
  title: string
  slug: string
  technologies: Technology[]
  body?: PortableTextBlock[]
  mainImage?: Image
  projectLinks?: ProjectLink[]
}
