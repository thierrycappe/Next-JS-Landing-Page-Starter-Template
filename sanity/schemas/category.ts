const category: {
  name: string;
  title: string;
  type: string;
  fields: (
    | {
        name: string;
        options: {
          unique: boolean;
          slugify: (input: any) => string;
          source: string;
        };
        title: string;
        type: string;
        validation: (Rule: any) => any;
      }
    | {
        name: string;
        options: {
          hotspot: boolean;
        };
        title: string;
        type: string;
      }
    | {
        name: string;
        title: string;
        type: string;
      }
    | {
        name: string;
        title: string;
        type: string;
      }
  )[];
} = {
  fields: [
    {
      name: 'tagname',
      title: 'Tag Name',
      type: 'string',
      options: {
        source: 'tagname',
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');
        },
      },
      validation: (Rule: any) =>
        Rule.custom((fields: any) => {
          if (
            fields !== fields.toLowerCase() ||
            fields.split(' ').includes('')
          ) {
            return 'Tags must be lowercase and not be included space';
          }
          return true;
        }),
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  name: 'tagDetail',
  title: 'Tag Detail',
  type: 'document',
};
export default category;
