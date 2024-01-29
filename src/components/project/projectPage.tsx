import CustomPortableText from '../sanityUtils/CustomPortableText'
import { Project } from '@/models/project'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'
import ProjectLinks from './projectLinks'
import ProjectTechnologiesList from './projectTechnologiesList'
import BackButton from '../navigation/backButton'
import ProjectContributorList from './projectContributorsList'

export default function ProjectPage({ project }: { project: Project }) {
  const { title, mainImage, body, technologies, contributors } = project

  return (
    <div className="">
      <header className="flex flex-col gap-4 duration-300 animate-in slide-in-from-bottom-4 lg:px-8">
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
        <BackButton />
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
            <div className="flex flex-col items-center gap-20 pt-4 duration-300 animate-in slide-in-from-top-4 lg:flex-row lg:items-start lg:justify-between ">
              <article className="container prose shrink-0 pt-4 md:prose-base 2xl:prose-xl max-md:max-w-full md:ml-16">
                {body ? <CustomPortableText value={body} /> : null}
              </article>
              <div className="flex w-full flex-col gap-16 md:px-16 lg:w-[20vw] lg:px-0 2xl:max-w-none 2xl:grow">
                <ProjectContributorList contributors={contributors} />
                <ProjectTechnologiesList technologies={technologies} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-16 flex justify-center"></footer>
    </div>
  )
}
