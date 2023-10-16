import Image from "next/image";
import AppearingAnim from "../AppearingAnim/AppearingAnim";
import Link from "next/link";
import { ImageT } from "@/types/types";

const CategoryCard = ({
  slug,
  name,
  description,
  image,
}: {
  slug: string;
  name: string;
  description: string;
  image: ImageT;
}) => {
  // console.log(slug, name, description, image, image.url);
  return (
    <AppearingAnim>
      <Link href={slug} className="w-full">
        <div className="flex flex-col w-full aspect-square h-[400px] md:h-[500px] border-2 border-grey1 transition-colors ease-in-out hover:border-grey2 bg-blackDimmed rounded-card overflow-hidden cursor-pointer group">
          <div className="flex flex-col items-center justify-center w-full h-2/5 text-cyanDark font-raleway">
            <h3 className="font-bold leading-none uppercase transition-colors ease-in-out cursor-pointer text-titleSmall md:text-titleMedium group-hover:text-cyanLight">
              {name}
            </h3>
            <p className="text-contentSmall md:text-contentMedium">
              {description}
            </p>
          </div>

          <div className="relative w-full transition-all ease-in-out h-3/5 group-hover:scale-110 group-hover:rotate-3 group-active:scale-90">
            {image?.url && (
              <Image
                src={image.url}
                height={image.height}
                width={image.width}
                alt={image.alt}
                className="object-contain w-full h-auto rounded-b-card"
              />
            )}
          </div>
        </div>
      </Link>
    </AppearingAnim>
  );
};

export default CategoryCard;
