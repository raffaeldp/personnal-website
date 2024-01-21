import { SanityDocument } from 'next-sanity'
import PortableImage from './shared/PortableImage'
import CustomPortableText from './shared/CustomPortableText'

export default function Project({ project }: { project: SanityDocument }) {
  const { title, mainImage, body } = project

  return (
    <main className="container prose prose-lg mx-auto p-4">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? <PortableImage image={mainImage} /> : null}
      {body ? <CustomPortableText value={body} /> : null}
    </main>
  )
}
