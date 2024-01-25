import { ProjectLink } from '@/models/projectLink'
import { LinkIcon, SparkleIcon } from 'lucide-react'
import Link from 'next/link'

export default function ProjectLinks({
  projectLinks,
}: {
  projectLinks: ProjectLink[]
}) {
  return (
    <div className="flex flex-row gap-4">
      {projectLinks.map(({ displayedName, url, isMain }, index) => (
        <Link
          key={`projectLink.displayedName-${index}`}
          href={url}
          target="_blank"
        >
          <button
            className={`btn ${
              isMain
                ? 'btn-primary rounded-xl text-white shadow-lg'
                : 'btn-link no-underline'
            }`}
          >
            {isMain ? (
              <SparkleIcon className="animate-in spin-in-90 text-white delay-150 duration-300" />
            ) : (
              <LinkIcon />
            )}
            {displayedName}
          </button>
        </Link>
      ))}
    </div>
  )
}
