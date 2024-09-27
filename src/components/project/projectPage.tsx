import CustomPortableText from '../sanityUtils/CustomPortableText'
import { Project } from '@/models/project'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'
import PageLinks from '../shared/pageLinks'
import ProjectTechnologiesList from './projectTechnologiesList'
import BackButton from '../navigation/backButton'
import ProjectContributorList from './projectContributorsList'

export default function ProjectPage({ project }: { project: Project }) {
  const { title, mainImage, body, technologies, contributors } = project

  return (
    <div>
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
            {project.pageLinks ? (
              <PageLinks pageLinks={project.pageLinks} />
            ) : null}
            <div className="divider"></div>
            <div className="flex flex-col items-center gap-4 pt-4 duration-300 animate-in slide-in-from-top-4 lg:flex-row lg:items-start lg:justify-between ">
              <article className="container prose shrink pt-4 md:prose-base 2xl:prose-xl max-md:max-w-full md:ml-16">
                {body ? <CustomPortableText value={body} /> : null}
              </article>
              <div className="flex w-full flex-col gap-6 md:gap-16 lg:w-64 lg:px-0">
                <ProjectTechnologiesList technologies={technologies} />
                <ProjectContributorList contributors={contributors} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-16 flex justify-center"></footer>
    </div>
  )
}
