import { Experience } from '@/models/experience'
import ExperienceCard from './experienceCard'

export default function Experiences({
  experiences,
}: {
  experiences: Experience[]
}) {
  return experiences.map((experience, id) => (
    <ExperienceCard key={id} experience={experience} />
  ))
}
