import { createClient } from '@sanity/client/stega'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { QueryParams } from '@sanity/client'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string
  qParams?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  })
}
