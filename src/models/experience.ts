import { Image, PortableTextBlock } from 'sanity'

export type Experience = {
  id: string
  place: string
  position: string
  field: string
  startingDate: Date
  endingDate?: Date
  city?: string
  body: PortableTextBlock[]
  logo: Image
}
