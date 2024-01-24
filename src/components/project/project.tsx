import CustomPortableText from '../sanityUtils/CustomPortableText'
import { Project } from '@/models/project'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'

export default function Project({ project }: { project: Project }) {
  const { title, mainImage, body } = project
  return (
    <div className="">
      <header className="flex flex-col items-center gap-4">
        <div className="relative h-40 w-full">
          <HeaderPortableImage image={mainImage} alt={`${title}-main-image`} />
        </div>
        <div className="prose">
          <h1>{title}</h1>
        </div>
      </header>
      <main>
        <div className="flex justify-around">
          <article className="container prose prose-lg">
            {body ? <CustomPortableText value={body} /> : null}
          </article>
          <div>
            <p>techno 1</p>
            <p>techno 2</p>
          </div>
        </div>
      </main>
    </div>
  )
}
