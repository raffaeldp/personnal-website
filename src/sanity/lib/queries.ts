import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug) && isImportant in $isImportantValues] | order(isImportant asc, publishedAt desc) {
    _id,
    title,
    slug,
    body,
    mainImage,
    contributors[]->{name, url},
    technologies[]->{name, url},
    projectLinks[]->{displayedName, url}
  }`

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    mainImage,
    contributors[]->{name, url},
    technologies[]->{name, url},
    projectLinks[]->{displayedName, url, isMain}
}`

export const EXPERIENCES_QUERY = groq`*[_type == "experience" && defined(slug)] {
  _id,
  place,
  position,
  field,
  startingDate,
  endingDate,
  city,
  body,
  logo,
  slug,
  pageLinks[]->{displayedName, url, isMain}
}`

export const EXPERIENCE_QUERY = groq`*[_type == "experience" && slug.current == $slug][0] {
  _id,
  place,
  position,
  field,
  startingDate,
  endingDate,
  city,
  body,
  logo,
  slug,
  pageLinks[]->{displayedName, url, isMain}
}`
