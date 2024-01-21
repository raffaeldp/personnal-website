import Projects from '@/components/projects'
import { getAllProjects } from '../projects.service'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div>
      <h1>Projects</h1>
      <Projects projects={projects}></Projects>
    </div>
  )
}
