import { ContentWithPhotosBlockT } from "@/types/types";

const ContentWithPhotosBlock = (props: ContentWithPhotosBlockT) => {
  const { title } = props;
  return <div>Enter {title}</div>;
};

export default ContentWithPhotosBlock;
