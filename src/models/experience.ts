import { Image, PortableTextBlock } from 'sanity'
import { PageLink } from './pageLink'

export type Experience = {
  id: string
  slug: string
  place: string
  position: string
  field: string
  startingDate: Date
  endingDate?: Date
  city?: string
  body: PortableTextBlock[]
  logo: Image
  pageLinks?: PageLink[]
}
