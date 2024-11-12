import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "date",
      type: "datetime",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "text",
      type: "blockContent",
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Links",
      of: [
        defineArrayMember({
          type: "object",
          name: "linkItem",
          title: "Link Item",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: "cover",
              type: "image",
              title: "Cover",
            },
            {
              name: "link",
              type: "url",
              title: "Link",
              description: "Embed src",
              validation: (Rule) => Rule.uri({ allowRelative: false }),
            },
            {
              name: "width",
              type: "number",
              title: "Width",
            },
            {
              name: "height",
              type: "number",
              title: "Height",
            },
          ],
          preview: {
            select: {
              title: "link",
              media: "cover",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
