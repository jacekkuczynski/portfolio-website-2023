import { Block } from "payload/types";

const ContentWithPhotosBlock: Block = {
  slug: "contentWithPhotosBlock",
  interfaceName: "Content_with_photos",
  fields: [
    {
      type: "row",
      fields: [
        { type: "text", name: "title" },
        { type: "text", name: "leading" },
      ],
    },
    { type: "richText", name: "richTextContent" },
    {
      type: "array",
      name: "photos",
      fields: [{ type: "upload", name: "photo", relationTo: "media" }],
    },
  ],
};

export default ContentWithPhotosBlock;
