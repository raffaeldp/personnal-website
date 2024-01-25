import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import project from './schemas/project'
import contributor from './schemas/contributor'
import technology from './schemas/technology'
import projectLink from './schemas/projectLink'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, contributor, blockContent, technology, projectLink],
}
