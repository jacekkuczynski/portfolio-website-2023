import { Block } from "payload/types";

const IconsBlock: Block = {
  slug: "iconsBlock",
  interfaceName: "Icons_section",
  fields: [
    { type: "text", name: "sectionTitle" },
    {
      type: "array",
      name: "icons",
      fields: [
        { type: "text", name: "iconName" },
        { type: "upload", name: "iconImage", relationTo: "media" },
        { type: "text", name: "link" },
      ],
    },
  ],
};

export default IconsBlock;
