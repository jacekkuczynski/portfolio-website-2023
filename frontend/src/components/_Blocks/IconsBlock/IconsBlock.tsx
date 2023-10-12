import { IconsBlockT } from "@/types/types";

const IconsBlock = (props: IconsBlockT) => {
  const { sectionTitle } = props;
  return <div>IconsBlock title:{sectionTitle}</div>;
};

export default IconsBlock;
