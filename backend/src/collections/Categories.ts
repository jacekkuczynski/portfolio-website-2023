import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  access: { read: () => true },
  fields: [
    {
      type: "row",
      fields: [
        { name: "name", type: "text" },
        { name: "description", type: "text" },
      ],
    },
    { name: "richTextTest", type: "richText" },
  ],
};

export default Categories;
