import { Image, PortableTextBlock } from 'sanity'
import { PageLink } from './pageLink'
import { Technology } from './technology'
import { Contributor } from './contributor'

export type Project = {
  _id: string
  title: string
  slug: string
  technologies: Technology[]
  contributors: Contributor[]
  body?: PortableTextBlock[]
  mainImage?: Image
  pageLinks?: PageLink[]
}
