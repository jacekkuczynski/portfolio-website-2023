import { GlobalConfig } from "payload/types";

const Variables: GlobalConfig = {
  slug: "variables",
  fields: [
    { type: "text", name: "heroDescription" },
    {
      type: "array",
      name: "titles",
      label: "Marquee Titles",
      fields: [{ type: "text", name: "title" }],
    },
    {
      type: "checkbox",
      label: "Open to work?",
      name: "acceptingProjects",
      defaultValue: true,
    },
    { type: "text", name: "email" },
    { type: "text", name: "city" },
    { type: "point", name: "location" },
  ],
};

export default Variables;
