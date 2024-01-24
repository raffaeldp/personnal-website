import Projects from '@/components/project/projects'
import { getAllProjects } from '../projects.service'

export default async function ProjectsPage() {
  const projects = await getAllProjects(true)

  return (
    <div className="flex flex-col items-center gap-12 pt-8">
      <div className="prose prose-lg">
        <h1>Projects</h1>
      </div>
      <Projects projects={projects}></Projects>
    </div>
  )
}
