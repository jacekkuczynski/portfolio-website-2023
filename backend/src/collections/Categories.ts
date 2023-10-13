import { CollectionConfig } from "payload/types";
import TitleBlock from "../blocks/TitleBlock";
import ContentWithPhotosBlock from "../blocks/ContentWithPhotosBlock";
import IconsBlock from "../blocks/IconsBlock";
import BooksBlock from "../blocks/BooksBlock";
import ProjectBlock from "../blocks/ProjectBlock";

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
        { type: "text", name: "name" },
        { type: "text", name: "slug", unique: true },
        { type: "number", name: "order" },
        { type: "text", name: "description" },
      ],
    },
    { type: "upload", name: "image", relationTo: "media" },
    {
      type: "blocks",
      name: "content",
      blocks: [
        TitleBlock,
        ContentWithPhotosBlock,
        IconsBlock,
        BooksBlock,
        ProjectBlock,
      ],
    },
  ],
};

export default Categories;
