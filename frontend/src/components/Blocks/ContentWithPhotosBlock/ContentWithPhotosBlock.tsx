import { ContentWithPhotosBlockT } from "@/types/types";
import serialize from "../serialize/serialize";

const ContentWithPhotosBlock = (props: ContentWithPhotosBlockT) => {
  const { title, leading, richTextContent } = props;
  return (
    <div className="container flex flex-col gap-16">
      <div className="flex flex-col ">
        <div className="text-center">
          <h3 className="font-bold text-whiteDimmed font-raleway text-titleSmall md:text-titleMedium lg:text-titleLarge md:tracking-[-0.06rem] lg:tracking-[-0.08rem] uppercase ">
            {title}
          </h3>
          <h4 className="">{leading}</h4>
        </div>
        <div>{serialize(richTextContent)}</div>
      </div>
      <div></div>
      Enter {title}
    </div>
  );
};

export default ContentWithPhotosBlock;
