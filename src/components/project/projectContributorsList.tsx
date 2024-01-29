import Link from 'next/link'
import ItemsList from '../shared/itemsList'
import ListItem from '../shared/listItem'
import { Contributor } from '@/models/contributor'

export default function ProjectContributorList({
  contributors,
}: {
  contributors: Contributor[]
}) {
  return (
    <ItemsList title="Contributors">
      {contributors?.map((contributor, index) => {
        const item = <ListItem name={contributor.name} />

        return contributor.url ? (
          <Link href={contributor.url} key={index} target="_blank">
            {item}
          </Link>
        ) : (
          item
        )
      })}
    </ItemsList>
  )
}
