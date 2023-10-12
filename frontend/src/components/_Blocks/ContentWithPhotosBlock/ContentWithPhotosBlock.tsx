import { ContentWithPhotosBlockT } from "@/types/types";
import serialize from "../serialize/serialize";
import Image from "next/image";

const ContentWithPhotosBlock = (props: ContentWithPhotosBlockT) => {
  const { title, leading, richTextContent, photos } = props;

  return (
    <div className="flex flex-col w-full gap-16 lg:flex-row">
      <div className="flex flex-col gap-8 lg:flex-1">
        <div className="text-center lg:text-left">
          <h1 className="title">{title}</h1>
          <h2 className="leading">{leading}</h2>
        </div>
        <div className="content">{serialize(richTextContent)}</div>
      </div>
      <div className="flex items-center justify-center w-full lg:flex-1">
        <div className="grid items-center justify-center grid-cols-2 gap-4 w-fit h-fit place-items-center">
          {photos.map((photo) => {
            const image = photo.photo;
            return (
              <Image
                key={image.id}
                src={image.url}
                alt={image.alt}
                height={image.height}
                width={image.width}
                className="aspect-square object-cover w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] rounded-3xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentWithPhotosBlock;
