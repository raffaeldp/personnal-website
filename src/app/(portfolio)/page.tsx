import Projects from '@/components/projects'
import { ChevronRight, MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import { getAllProjects } from './projects.service'
import Link from 'next/link'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <div className="flex h-full flex-col items-center gap-8">
      <div className="flex w-full items-start justify-start pt-6">
        <div className="flex items-center gap-4">
          <Image
            className="mask mask-squircle"
            src={'/moi_rogne.png'}
            width={150}
            height={150}
            alt="me"
          />
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Raffael Di Pietro</h1>
            <div className="flex flex-col gap-2">
              <p>French web developper</p>
              <div className="flex gap-3">
                <MapPinIcon />
                <p>Strasbourg, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-fit flex-col gap-4">
          <div className="flex flex-col justify-between pt-6 md:flex-row md:items-center">
            <h1 className="text-xl font-bold">My projects</h1>
            <Link href={'/projects'}>
              <button className="btn btn-ghost">
                See more <ChevronRight />
              </button>
            </Link>
          </div>

          <Projects projects={projects}></Projects>
        </div>
      </div>
    </div>
  )
}
