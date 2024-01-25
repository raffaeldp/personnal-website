import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectLink',
  title: 'Project Link',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'This name is only used in the CMS.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayedName',
      title: 'Displayed Name',
      description: 'This name will be displayed on the project page.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isMain',
      title: 'Is Main',
      description:
        'The main links are highlighted. Only one link per project can be main.',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
