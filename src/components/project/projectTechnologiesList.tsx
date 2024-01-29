import { Technology } from '@/models/technology'
import Link from 'next/link'
import ItemsList from '../shared/itemsList'
import ListItem from '../shared/listItem'

export default function ProjectTechnologiesList({
  technologies,
}: {
  technologies: Technology[]
}) {
  return (
    <ItemsList title="Created using">
      {technologies?.map((technology, index) => (
        <Link href={technology.url} key={index} target="_blank">
          <ListItem name={technology.name} />
        </Link>
      ))}
    </ItemsList>
  )
}
