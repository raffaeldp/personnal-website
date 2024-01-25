import CustomPortableText from '../sanityUtils/CustomPortableText'
import { Project } from '@/models/project'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'
import TechnologyTag from '../technologies/technologyTag'
import ProjectLinks from './projectLinks'

export default function Project({ project }: { project: Project }) {
  const { title, mainImage, body, technologies } = project

  return (
    <div className="">
      <header className="flex flex-col items-center gap-4 ">
        {mainImage ? (
          <div className="relative h-48 w-full">
            <HeaderPortableImage
              classesImage="rounded-b-xl"
              image={mainImage}
              alt={`${title}-main-image`}
            />
          </div>
        ) : (
          <div className="pt-8"></div>
        )}
        <div className="prose-lg 2xl:prose-2xl">
          <h1>{title}</h1>
        </div>
      </header>
      <main className="mt-4">
        <div className="lg:px-8">
          <div className="flex flex-col gap-4">
            {project.projectLinks ? (
              <ProjectLinks projectLinks={project.projectLinks} />
            ) : null}
            <div className="divider"></div>
            <div className="flex flex-col items-center pt-4 lg:flex-row lg:items-start lg:justify-between ">
              <article className="container prose pt-4 md:prose-base 2xl:prose-xl max-md:max-w-full md:ml-16">
                {body ? <CustomPortableText value={body} /> : null}
              </article>
              <div className="h-fit w-fit rounded-xl bg-base-100 p-4 shadow-xl">
                <p>Created with</p>
                <div className="flex h-fit flex-col gap-3 rounded-xl pt-4">
                  {technologies?.map((technology, index) => (
                    <TechnologyTag
                      name={technology}
                      key={index}
                    ></TechnologyTag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-16 flex justify-center"></footer>
    </div>
  )
}
