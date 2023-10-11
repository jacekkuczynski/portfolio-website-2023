import { BookT } from "@/types/types";
import Image from "next/image";

const Book = (props: BookT) => {
  const { author, title, cover } = props;
  return (
    <div className="flex w-full transition-colors ease-in-out rounded-lg lg:w-10/12 border-1 hover:border-grey2 bg-blackDimmed text-whiteDimmed border-grey1">
      <Image
        src={cover.url}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        className="object-fill  h-auto w-[150px] md:w-auto  md:h-[300px] rounded-l-lg"
      />
      <div className="flex flex-col items-center justify-center w-full gap-1 px-4 text-center md: md:px-8 lg:px-16">
        <h3 className="text-leadingSmall md:text-leadingMedium lg:text-leadingLarge leading-[1.4] font-raleway">
          {author}
        </h3>
        <h4 className="text-contentSmall md:text-contentMedium lg:text-contentLarge leading-[1.6] font-roboto">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default Book;
