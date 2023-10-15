import AppearingAnim from "@/components/AppearingAnim/AppearingAnim";
import { BookT } from "@/types/types";
import Image from "next/image";

const Book = (props: BookT) => {
  const { author, title, cover, index } = props;
  return (
    <AppearingAnim>
      <div className="flex w-full transition-colors ease-in-out rounded-lg lg:w-10/12 border-1 hover:border-grey2 bg-blackDimmed text-whiteDimmed border-grey1">
        <Image
          priority={index < 3 ? true : false}
          src={cover.url}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          className="object-fill h-auto w-[150px] md:w-auto md:h-[300px] rounded-l-lg"
        />
        <div className="flex flex-col items-center justify-center w-full gap-1 px-4 text-center md: md:px-8 lg:px-16">
          <h3 className="leading text-whiteDimmed">{author}</h3>
          <h4 className="content">{title}</h4>
        </div>
      </div>
    </AppearingAnim>
  );
};

export default Book;
