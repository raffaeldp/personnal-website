import { Image, PortableTextBlock } from 'sanity'
import { ProjectLink } from './projectLink'

export type Project = {
  _id: string
  title: string
  slug: string
  technologies: string[]
  body?: PortableTextBlock[]
  mainImage?: Image
  projectLinks?: ProjectLink[]
}
