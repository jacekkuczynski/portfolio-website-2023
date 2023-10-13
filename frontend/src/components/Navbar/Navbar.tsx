import { getGlobalVariables, getWeatherInfo } from "@/fetchers/fetchers";
import Logo from "../Logo/Logo";
import ScrollProgress from "./ScrollProgress";
import { CheckCircle2, Menu, XCircle } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = async () => {
  const { city, acceptingProjects, location } = await getGlobalVariables();
  const { weathercode, temperature, is_day } = await getWeatherInfo(location);

  const date = new Date();
  const currentTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Europe/Warsaw",
  });
  const currentMonth = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  const commonProps = {
    strokeWidth: 1.5,
    width: 24,
    height: 24,
    className: "text-blackDimmed fill-cyanDark",
  };

  const status = acceptingProjects ? "Accepting Projects" : "Currently Busy";

  return (
    <nav className="sticky top-0 z-50 w-full bg-blackDimmed text-whiteDimmed border-b-1 border-grey1">
      <div className="container flex items-center justify-between sm:h-20 h-[50px] w-full">
        <Logo />
        <div className="flex items-center content-center gap-10 uppercase text-contentSmall">
          <div className="gap-1 md:gap-2.5 font-raleway items-center hidden lg:flex">
            <WeatherIcon code={weathercode} isDay={is_day} />
            <span>
              {temperature}ºC / {city} / {currentTime}
            </span>
          </div>
          <div className="gap-1 sm:gap-2.5 items-center hidden md:flex">
            {acceptingProjects ? (
              <CheckCircle2
                strokeWidth={1.5}
                width={24}
                height={24}
                className="text-blackDimmed fill-cyanDark"
              />
            ) : (
              <XCircle
                strokeWidth={1.5}
                width={24}
                height={24}
                className="text-blackDimmed fill-red"
              />
            )}
            <span className="underline font-roboto underline-offset-2">
              {status} / {currentMonth}
            </span>
          </div>
          <div className="w-4 cursor-pointer">
            <HamburgerMenu />
          </div>
        </div>
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default Navbar;
