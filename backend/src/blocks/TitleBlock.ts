import type { Block } from "payload/types";

const TitleBlock: Block = {
  slug: "titleBlock",
  //   imageURL: "",
  interfaceName: "Title",
  fields: [
    {
      type: "row",
      fields: [
        { type: "text", name: "title" },
        { type: "text", name: "description" },
      ],
    },
  ],
};

export default TitleBlock;
