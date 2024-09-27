import { Experience } from '@/models/experience'
import ExperienceCard from './experienceCard'

function getStartingDate(experience: Experience) {
  return experience.startingDate.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

function getEndingDate(experience: Experience) {
  return experience.endingDate
    ? experience.endingDate.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })
    : 'Today'
}

function sortExperiences(a: Experience, b: Experience) {
  if (!a.endingDate && b.endingDate) {
    return -1 // a comes first
  }
  if (a.endingDate && !b.endingDate) {
    return 1 // b comes first
  }
  if (!a.endingDate && !b.endingDate) {
    return 0 // both are equal
  }

  if (a.endingDate && b.endingDate) {
    // Both have ending dates, sort by starting date descending order
    return (
      new Date(b.startingDate).getTime() - new Date(a.startingDate).getTime()
    )
  }
  return 0
}

export default function Experiences({
  experiences,
}: {
  experiences: Experience[]
}) {
  return (
    <div className="flex flex-col items-center gap-16 pb-16">
      {experiences.sort(sortExperiences).map((experience, idx) => (
        <div
          key={idx}
          className={
            (idx % 2 === 0
              ? 'md:flex-row md:self-start'
              : 'md:flex-row-reverse md:self-end') +
            ' flex flex-col items-center gap-5'
          }
        >
          <ExperienceCard experience={experience} />
          <div className="flex flex-row md:flex-col">
            <p className="md:text-end">
              {getStartingDate(experience)} - {getEndingDate(experience)}
            </p>
            {experience.city ? (
              <p
                className={
                  (idx % 2 === 1 ? 'md:text-end' : '') + ' text-slate-500'
                }
              >
                <span className="ml-1 md:hidden"> - </span>
                {experience.city}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}
