import {
  BlockT,
  BookBlockT,
  ContentT,
  ContentWithPhotosBlockT,
  IconsBlockT,
  ProjectBlockT,
  TitleBlockT,
} from "@/types/types";
import TitleBlock from "../_Blocks/TitleBlock/TitleBlock";
import BooksBlock from "../_Blocks/BooksBlock/BooksBlock";
import ProjectBlock from "../_Blocks/ProjectBlock/ProjectBlock";
import IconsBlock from "../_Blocks/IconsBlock/IconsBlock";
import ContentWithPhotosBlock from "../_Blocks/ContentWithPhotosBlock/ContentWithPhotosBlock";

const CategoryContent = ({ content }: { content: ContentT }) => {
  const getBlocks = (block: BlockT, key: string) => {
    switch (block.blockType) {
      case "titleBlock":
        return <TitleBlock {...(block as TitleBlockT)} key={key} />;

      case "booksBlock":
        return <BooksBlock {...(block as BookBlockT)} key={key} />;

      case "projectBlock":
        return <ProjectBlock {...(block as ProjectBlockT)} key={key} />;

      case "iconsBlock":
        return <IconsBlock {...(block as IconsBlockT)} key={key} />;

      case "contentWithPhotosBlock":
        return (
          <ContentWithPhotosBlock
            {...(block as ContentWithPhotosBlockT)}
            key={key}
          />
        );

      default:
        return null;
    }
  };
  const blocksComponents = content.map((block) => {
    const key = block.id;
    const component = getBlocks(block, key);
    return component;
  });

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 my-10">
      {blocksComponents}
    </div>
  );
};

export default CategoryContent;
