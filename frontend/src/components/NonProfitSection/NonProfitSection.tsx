import DecorativeElement from "./DecorativeElement";

const NonProfitSection = () => {
  return (
    <section className="relative w-full h-almostFull">
      <div className="absolute top-0 w-full h-full bg-decorative-element">
        <DecorativeElement />
      </div>
      <div className="container absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="p-4 transform border-2 bg-blackDimmed opacity-80 rounded-xl border-cyan">
          <p className="font-bold text-center text-whiteDimmed text-titleSmall md:text-titleMedium ">
            Do you represent a <span className="text-cyan">non-profit</span>{" "}
            organization?{" "}
            <span className="underline transition-colors ease-in-out cursor-pointer text-cyan hover:text-cyanLight">
              Contact me
            </span>{" "}
            and I will help or carry out the project for{" "}
            <span className="text-cyan">free</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NonProfitSection;
