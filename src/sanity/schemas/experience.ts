import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'place',
      title: 'Place',
      type: 'string',
      description: 'Big name, ex: Pixacare / IUT Robert Schuman',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Position I am in : Fullstack dev, DUT informatique etc...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'field',
      title: 'Field',
      type: 'string',
      description: 'Field, ex: Computer Science, work-study',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.place}-${doc.position}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Starting date',
      name: 'startingDate',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Ending date',
      description: 'Leave empty if not finished.',
      name: 'endingDate',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'pageLinks',
      title: 'Page links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'projectLink' } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
