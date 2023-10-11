import { TitleBlockT } from "@/types/types";

const TitleBlock = (props: TitleBlockT) => {
  const { title, description } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold uppercase font-raleway text-titleSmall md:text-titleMedium lg:text-titleLarge text-whiteDimmed">
        Enter{title}
      </h1>
      <h2 className="text-leadingSmall md:text-leadingMedium lg:text-leadingLarge text-grey3 leading-[1.4]">
        {description}
      </h2>
    </div>
  );
};

export default TitleBlock;
