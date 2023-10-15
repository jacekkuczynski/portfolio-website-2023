import { IconsBlockT } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const IconsBlock = (props: IconsBlockT) => {
  const { sectionTitle, icons } = props;
  return (
    <div className="flex flex-col gap-4 ">
      <h3 className="text-center leading text-whiteDimmed">{sectionTitle}</h3>
      <div className="flex flex-wrap items-center justify-center w-full gap-4">
        {icons.map((icon, index) => {
          const image = icon.iconImage;
          return (
            <div
              key={icon.id}
              className="flex flex-col items-center justify-center gap-2 w-fit"
            >
              <Link href={icon.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.url}
                  alt={image.alt}
                  height={image.height}
                  width={image.width}
                  className={`hover:${
                    index % 2 === 1 ? "rotate-1" : "-rotate-1"
                  } object-contain bg-grey1 w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-[32px] hover:border-grey2 transition-all hover:scale-105 ease-in-out border-1 border-grey1 hover:-translate-y-1 p-4`}
                />
              </Link>

              <h4 className="text-whiteDimmed  text-leadingSmall font-raleway leading-[1.4]">
                {icon.iconName}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsBlock;
