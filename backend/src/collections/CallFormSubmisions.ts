import { CollectionConfig } from "payload/types";
import payload from "payload";

const CallFormSubmissions: CollectionConfig = {
  slug: "callFormSubmissions",
  admin: { useAsTitle: "name" },
  access: { create: () => true },
  fields: [
    { type: "text", name: "contactInfo", admin: { readOnly: true } },
    { type: "text", name: "message", admin: { readOnly: true } },
    { type: "date", name: "contactDate", admin: { readOnly: true } },
  ],
  hooks: {
    afterChange: [
      ({ doc, operation, req }) => {
        const { contactInfo, message } = doc;
        if (operation === "create") {
          req.payload.sendEmail({
            to: process.env.EMAIL_RECIPIENT,
            from: process.env.SMTP_USER,
            subject: "New contact from website",
            html: `<h1>contactInfo: ${contactInfo}<br/>message: ${message}</h1>`,
          });
        }
      },
    ],
  },
};

export default CallFormSubmissions;
