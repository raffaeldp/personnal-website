import Projects from '@/components/project/projects'
import { ChevronRight, MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import { getAllProjects } from './projects.service'
import Link from 'next/link'
import { getAllExperiences } from './experiences.service'
import Experiences from '@/components/experience/experiences'

export default async function Home() {
  const projects = await getAllProjects()
  const experiences = await getAllExperiences()

  return (
    <div className="flex h-full flex-col items-center gap-8">
      <div className="flex w-full items-start justify-start pt-6">
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <Image
            className="mask mask-squircle"
            src={'/bogoss.webp'}
            width={150}
            height={150}
            alt="me"
          />
          <div className="flex flex-col gap-6">
            <h1 className="whitespace-nowrap text-5xl font-bold">
              Raffael<br className="block sm:hidden"></br> Di Pietro
            </h1>
            <div className="flex flex-col gap-2">
              <p>Web developper</p>
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
          <div className="flex items-center justify-between pt-6">
            <h1 className="text-xl font-bold">My projects</h1>
            <Link href={'/projects'}>
              <button className="btn-ghost btn">
                See more <ChevronRight />
              </button>
            </Link>
          </div>
          <Projects projects={projects} />
          <div className="flex items-center justify-between pt-14">
            <h1 className="text-xl font-bold">My experiences</h1>
            <Link href={'/experiences'}>
              <button className="btn-ghost btn">
                See more <ChevronRight />
              </button>
            </Link>
          </div>
          <Experiences experiences={experiences} />
        </div>
      </div>
    </div>
  )
}
