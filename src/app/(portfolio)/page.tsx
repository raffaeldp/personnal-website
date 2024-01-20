import Projects from '@/components/projects'
import { PROJECTS_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { ChevronRight, MapPinIcon } from 'lucide-react'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'

export default async function Home() {
  const projects = await loadQuery<SanityDocument[]>(PROJECTS_QUERY)

  return (
    <div className="flex h-full flex-col gap-8">
      <div className="flex items-start justify-start pt-6">
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
            <button className="btn btn-ghost">
              See more <ChevronRight />
            </button>
          </div>

          <Projects projects={projects.data}></Projects>
        </div>
      </div>
    </div>
  )
}
