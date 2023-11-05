import path from "path";
import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: { read: () => true },
  upload: {
    staticDir: path.resolve(__dirname, process.env.RAILWAY_VOLUME_MOUNT_PATH),
    adminThumbnail: "thumbnail",
    staticURL: "/media",
    mimeTypes: [
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/svg+xml",
      "image/webp",
    ],
    formatOptions: { format: "webp", options: { quality: 75 } },
    resizeOptions: {
      withoutEnlargement: true,
      fit: "cover",
      height: 1500,
      width: null,
    },

    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: "center",
        name: "thumbnail",
        formatOptions: { format: "webp", options: { quality: 75 } },
      },
    ],
  },
  fields: [{ name: "alt", type: "text", required: true }],
};

export default Media;
