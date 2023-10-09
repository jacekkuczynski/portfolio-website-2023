import Image from "next/image";
import exampleImg from "./example.png";
import AppearingAnim from "../AppearingAnim/AppearingAnim";

const CategoryCard = () => {
  return (
    <AppearingAnim>
      <div className="flex flex-col w-full sm:w-[500px] h-[400px] md:h-[500px] border-2 border-grey1 transition-colors ease-in-out hover:border-grey2 bg-blackDimmed rounded-card overflow-hidden cursor-pointer group">
        <div className="flex flex-col items-center justify-center w-full h-2/5 text-cyanDark font-raleway">
          <h3 className="font-bold leading-none uppercase transition-colors ease-in-out cursor-pointer text-titleSmall md:text-titleMedium group-hover:text-cyanLight">
            my works
          </h3>
          <p className="text-contentSmall md:text-contentMedium">
            some of my selected projects
          </p>
        </div>

        <div className="relative w-full transition-all ease-in-out h-3/5 group-hover:scale-110 group-hover:rotate-3 group-active:scale-90">
          <Image
            src={exampleImg}
            fill
            alt={"example img"}
            className="object-cover rounded-b-card"
          />
        </div>
      </div>
    </AppearingAnim>
  );
};

export default CategoryCard;
