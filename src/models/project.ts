import { PortableTextBlock } from 'sanity'

export type Project = {
  _id: string
  title: string
  slug: string
  body: PortableTextBlock[]
  technologies: string[]
}
