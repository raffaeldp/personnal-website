import { Experience } from '@/models/experience'
import HeaderPortableImage from '../sanityUtils/HeaderPortableImage'

export default function ExperienceCard({
  experience,
}: {
  experience: Experience
}) {
  return (
    <div className="card card-compact flex-row gap-4 rounded-xl bg-base-100 p-4 shadow-xl transition-transform duration-300 animate-in slide-in-from-top-4 hover:z-10 hover:scale-105">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
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
        <div className="flex text-xl">
          <p>{experience.place}</p>
          <div className="divider divider-horizontal"></div>
          <p>{experience.position}</p>
        </div>
      </div>
    </div>
  )
}
