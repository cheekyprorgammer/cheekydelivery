export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Restaurant Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Restaurant Rating',
      type: 'number',
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a number between 1 and 5"),
    },
    {
      name: 'type',
      title: 'Restaurant Category',
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
}
