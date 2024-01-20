import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Image, PortableTextBlock } from 'sanity'
import PortableImage from './PortableImage'

export default function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <PortableImage
            image={value}
            classesWrapper="relative aspect-[16/9]"
          />
        )
      },
    },
  }

  return <PortableText value={value} components={components} />
}
