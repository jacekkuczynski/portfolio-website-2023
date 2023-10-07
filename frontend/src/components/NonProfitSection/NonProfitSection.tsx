import AppearingAnim from "../AppearingAnim/AppearingAnim";
import DecorativeElement from "./DecorativeElement";

const NonProfitSection = () => {
  return (
    <section className="relative w-full h-almostFull">
      <div className="absolute top-0 w-full h-full bg-decorative-element">
        <DecorativeElement />
      </div>
      <div className="container absolute -translate-x-1/2 -translate-y-1/2 w-fit top-1/2 left-1/2">
        <AppearingAnim>
          <div className="flex flex-col gap-2 p-4 text-center md:p-6 text-whiteDimmed">
            <h3 className="font-bold text-titleSmall md:text-titleMedium whitespace-nowrap">
              Non-profits
            </h3>
            <p className="font-normal text-contentSmall md:text-contentMedium lg:text-contentLarge ">
              Do you represent a{" "}
              <span className="font-bold text-cyan">non-profit</span>{" "}
              organization?{" "}
              <span className="font-bold underline transition-colors ease-in-out cursor-pointer text-cyan hover:text-cyanLight">
                Contact me
              </span>{" "}
              and I will help or carry out the project for{" "}
              <span className="font-bold text-cyan">free</span>
            </p>
          </div>
        </AppearingAnim>
      </div>
    </section>
  );
};

export default NonProfitSection;
