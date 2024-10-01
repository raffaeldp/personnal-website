import { getAllExperiences } from '../experiences.service'
import Experiences from '@/components/experience/experiences'

export default async function ProjectsPage() {
  const experiences = await getAllExperiences()

  return (
    <div className="flex flex-col items-center gap-12 pt-8">
      <div className="prose prose-lg">
        <h1>Experiences</h1>
      </div>
      <Experiences experiences={experiences}></Experiences>
    </div>
  )
}
