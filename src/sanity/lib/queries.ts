import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug) && isImportant in $isImportantValues] | order(isImportant asc, publishedAt desc) {
    _id,
    title,
    slug,
    body,
    mainImage,
    technologies[]->{name, url},
    projectLinks[]->{displayedName, url}
  }`

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    mainImage,
    technologies[]->{name, url},
    projectLinks[]->{displayedName, url, isMain}
}`
