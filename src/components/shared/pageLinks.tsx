import { PageLink } from '@/models/pageLink'
import { LinkIcon, SparkleIcon } from 'lucide-react'
import Link from 'next/link'

export default function PageLinks({
  pageLinks: pageLinks,
}: {
  pageLinks: PageLink[]
}) {
  return (
    <div className="flex flex-row gap-4">
      {pageLinks.map(({ displayedName, url, isMain }, index) => (
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
              <SparkleIcon className="text-white delay-150 duration-300 animate-in spin-in-90" />
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
