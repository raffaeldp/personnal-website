import { Experience } from '@/models/experience'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'
import { PortableText } from '@portabletext/react'

export default function ExperienceCard({
  experience,
}: {
  experience: Experience
}) {
  return (
    <>
      <div className="card card-compact max-w-lg flex-row gap-4 rounded-xl bg-base-100 p-4 shadow-xl transition-transform duration-300 animate-in slide-in-from-top-4 hover:z-10 hover:scale-105">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
          <HeaderPortableImage
            classesImage="rounded-full"
            height={32}
            width={32}
            image={experience.logo}
            alt={`${experience.place}-logo`}
          />
        </div>
        <div>
          <p className="text-base">{experience.field}</p>
          <div className="flex flex-wrap text-xl">
            <p className="font-bold">{experience.place}</p>
            <p className="mx-1">|</p>
            <p>{experience.position}</p>
          </div>
          <div className="font- mt-4 line-clamp-4">
            <PortableText value={experience.body}></PortableText>
          </div>
        </div>
      </div>
    </>
  )
}
