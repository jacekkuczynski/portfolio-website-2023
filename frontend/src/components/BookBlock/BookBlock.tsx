import Image from "next/image";

const BookBlock = ({ author, title }: { author: string; title: string }) => {
  return (
    <div className="flex w-full transition-colors ease-in-out rounded-lg border-1 lg:w-10/12 border-blackDimmed hover:border-grey1 bg-blackDimmed text-whiteDimmed">
      <div className="w-[150px] h-auto md:w-auto md:h-[300px]">
        <Image src={""} alt={""} className="" />
      </div>
      <div className="flex flex-col px-4 md:px-8 lg:px-16">
        <h3 className="text-leadingSmall md:text-leadingMedium lg:text-leadingLarge leading-[1.4]">
          {author}
        </h3>
        <h4 className="text-contentSmall md:text-contentMedium lg:text-contentLarge leading-[1.6]">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default BookBlock;
