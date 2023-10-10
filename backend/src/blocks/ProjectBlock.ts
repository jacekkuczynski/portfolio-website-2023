import { Block } from "payload/types";

const ProjectBlock: Block = {
  slug: "projectBlock",
  //   imageURL: "",
  interfaceName: "Project",
  fields: [
    {
      type: "row",
      fields: [
        { type: "upload", name: "image", relationTo: "media" },
        { type: "text", name: "title" },
        { type: "text", name: "shortDescription" },
      ],
    },
    {
      type: "array",
      name: "techs",
      fields: [{ type: "text", name: "tech" }],
    },
    {
      type: "array",
      name: "features",
      fields: [{ type: "text", name: "feature" }],
    },
    { type: "text", name: "longDescription" },
    {
      type: "row",
      fields: [
        { type: "text", name: "repoLink" },
        { type: "text", name: "websiteLink" },
      ],
    },
  ],
};

export default ProjectBlock;
