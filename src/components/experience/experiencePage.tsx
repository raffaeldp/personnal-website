import { Experience } from '@/models/experience'
import BackButton from '../navigation/backButton'
import CustomPortableText from '../sanityUtils/CustomPortableText'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'
import { getEndingDate, getStartingDate } from './experience-date-utils'
import PageLinks from '../shared/pageLinks'

export default function ExperiencePage({
  experience,
}: {
  experience: Experience
}) {
  return (
    <>
      <header className="mt-4 flex flex-col gap-4 duration-300 animate-in slide-in-from-bottom-4 lg:px-8">
        <BackButton />
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
            <HeaderPortableImage
              classesImage="rounded-full"
              height={64}
              width={64}
              image={experience.logo}
              alt={`${experience.place}-logo`}
            />
          </div>
          <div className="prose flex w-full flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-baseline">
              <h1 className="m-0 text-4xl font-semibold">{experience.place}</h1>
              <p className="m-0 text-lg ">{experience.position}</p>
              <p className="m-0 text-lg  text-slate-500">{experience.field}</p>
            </div>
            <div className="flex flex-col">
              <p className="m-0 text-base ">
                {getStartingDate(experience)} - {getEndingDate(experience)}
              </p>
              {experience.city ? (
                <p className="m-0 text-slate-500 ">{experience.city}</p>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <main className="mt-4">
        <div className="lg:px-8">
          <div className="flex flex-col gap-4">
            {experience.pageLinks ? (
              <PageLinks pageLinks={experience.pageLinks} />
            ) : null}
            <div className="divider"></div>
            <div className="flex flex-col items-center gap-4 pt-4 duration-300 animate-in slide-in-from-top-4 lg:flex-row lg:items-start lg:justify-between ">
              <article className="container prose shrink pt-4 md:prose-base 2xl:prose-xl max-md:max-w-full md:ml-16">
                {experience.body ? (
                  <CustomPortableText value={experience.body} />
                ) : null}
              </article>
              {/* <div className="flex w-full flex-col gap-6 md:gap-16 lg:w-64 lg:px-0">
                <ProjectTechnologiesList technologies={technologies} />
                <ProjectContributorList contributors={contributors} />
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
