import { Experience } from '@/models/experience'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'
import { PortableText } from '@portabletext/react'

export default function ExperienceCard({
  experience,
}: {
  experience: Experience
}) {
  return (
    <div className="card card-compact max-w-lg flex-row gap-4 rounded-xl bg-base-100 p-4 shadow-xl transition-transform animate-in slide-in-from-top-4 duration-300 hover:z-10 hover:scale-105">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
        <HeaderPortableImage
          classesImage="rounded-full"
          height={32}
          width={32}
          image={experience.logo}
          alt={`${experience.place}-logo`}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-base">{experience.field}</p>
        <div className="flex flex-wrap text-xl">
          <p className="font-bold">{experience.place}</p>
          <p className="mx-1">|</p>
          <p>{experience.position}</p>
        </div>
        <div className="mt-4 line-clamp-3">
          <PortableText value={experience.body}></PortableText>
        </div>
        <button className="btn-link btn mt-4 h-fit min-h-fit self-end p-0 font-thin no-underline">
          Learn more
        </button>
      </div>
    </div>
  )
}
