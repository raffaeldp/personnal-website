import CustomPortableText from '../sanityUtils/CustomPortableText'
import { Project } from '@/models/project'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'
import TechnologyTag from '../technologies/technologyTag'

export default function Project({ project }: { project: Project }) {
  const { title, mainImage, body, technologies } = project
  console.log(project)

  return (
    <div className="">
      <header className="flex flex-col items-center gap-4 ">
        {mainImage ? (
          <div className="relative h-40 w-full">
            <HeaderPortableImage
              classesImage="rounded-b-xl"
              image={mainImage}
              alt={`${title}-main-image`}
            />
          </div>
        ) : (
          <div className="pt-8"></div>
        )}
        <div className="prose">
          <h1>{title}</h1>
        </div>
      </header>
      <main className="mt-4">
        <div className="flex justify-around">
          <article className="container prose prose-lg rounded-xl pt-4">
            {body ? <CustomPortableText value={body} /> : null}
          </article>
          <div className="h-fit rounded-xl bg-base-100 p-4 shadow-xl">
            <p>Created with</p>
            <div className="flex h-fit flex-col gap-3 rounded-xl pt-4">
              {technologies?.map((technology, index) => (
                <TechnologyTag name={technology} key={index}></TechnologyTag>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
