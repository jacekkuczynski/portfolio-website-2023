import { Block } from "payload/types";

const BooksBlock: Block = {
  slug: "booksBlock",
  interfaceName: "Books",
  fields: [
    {
      type: "array",
      name: "book",
      fields: [
        { type: "upload", name: "cover", relationTo: "media" },
        { type: "text", name: "title" },
        { type: "text", name: "author" },
      ],
    },
  ],
};

export default BooksBlock;
