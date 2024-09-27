import { Experience } from '@/models/experience'
import ExperienceCard from './experienceCard'

export default function Experiences({
  experiences,
}: {
  experiences: Experience[]
}) {
  return (
    <div className="flex flex-col items-center gap-16 border border-red-300 pb-16">
      {experiences.map((experience, idx) => (
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
          <p>{experience.date}</p>
        </div>
      ))}
    </div>
  )
}
