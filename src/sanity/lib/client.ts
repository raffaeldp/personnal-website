import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { QueryParams } from '@sanity/client'
import { token } from './token'
import { groq } from 'next-sanity'
import { TagByTypes } from '@/utils/tagByTypes'

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
  return client.fetch<QueryResponse>(query, qParams || {}, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  })
}

export function generateStaticSlugs(type: string) {
  // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
  return client
    .withConfig({
      token,
      perspective: 'published',
      useCdn: false,
      stega: false,
    })
    .fetch<string[]>(
      groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
      { type },
      {
        next: {
          tags: [TagByTypes[type]],
        },
      }
    )
}
