import { Image, PortableTextBlock } from 'sanity'

export type Project = {
  _id: string
  title: string
  slug: string
  body: PortableTextBlock[]
  mainImage: Image
  technologies: string[]
}
