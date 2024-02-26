import { Image, PortableTextBlock } from 'sanity'

export type Experience = {
  id: string
  place: string
  position: string
  field: string
  date: string
  body: PortableTextBlock[]
  logo: Image
}
