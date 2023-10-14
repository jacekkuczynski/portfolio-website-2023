import { getGlobalVariables } from "@/fetchers/fetchers";
import AppearingAnim from "../AppearingAnim/AppearingAnim";
import Dynamic3DLoader from "./Dynamic3DLoader";

const NonProfitSection = async () => {
  const { email } = await getGlobalVariables();
  return (
    <section className="relative w-full border-y-2 h-almostFull border-cyan">
      <div className="absolute top-0 w-full h-full ">
        <Dynamic3DLoader />
      </div>
      <div className="container absolute -translate-x-1/2 -translate-y-1/2 w-fit top-1/2 left-1/2">
        <AppearingAnim>
          <div className="flex flex-col gap-2 p-4 text-center border-2 bg-blackDimmed md:p-6 text-whiteDimmed opacity-95 rounded-xl border-cyanDark">
            <h3 className="font-bold text-titleSmall md:text-titleMedium whitespace-nowrap">
              Non-profits
            </h3>
            <p className="content">
              Do you represent a{" "}
              <span className="font-bold text-cyan">non-profit</span>{" "}
              organization?{" "}
              <span className="font-bold underline transition-colors ease-in-out cursor-pointer text-cyan hover:text-cyanLight">
                <a href={`mailto:${email}`} className="w-full">
                  Send me an email
                </a>
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
