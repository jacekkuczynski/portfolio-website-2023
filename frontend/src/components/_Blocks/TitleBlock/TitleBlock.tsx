import { TitleBlockT } from "@/types/types";

const TitleBlock = (props: TitleBlockT) => {
  const { title, description } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="title">Enter{title}</h1>
      <h2 className="leading">{description}</h2>
    </div>
  );
};

export default TitleBlock;
