import { getWeatherInfo } from "@/fetchers/fetchers";
import Logo from "../Logo/Logo";
import ScrollProgress from "./ScrollProgress";
import { CheckCircle2, Menu } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

const Navbar = async () => {
  const { weathercode, temperature, is_day, success } = await getWeatherInfo();
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

  return (
    <nav className="sticky top-0 z-50 w-full bg-blackDimmed text-whiteDimmed border-b-1 border-grey1">
      <div className="container flex items-center justify-between sm:h-20 h-[50px] w-full">
        <Logo />
        <div className="flex items-center content-center gap-10 uppercase text-contentSmall">
          <div className="gap-1 md:gap-2.5 font-raleway items-center hidden lg:flex">
            <WeatherIcon code={weathercode} isDay={is_day} />
            <span>
              {temperature}ºC / Poznań / {currentTime}
            </span>
          </div>
          <div className="gap-1 sm:gap-2.5 items-center hidden md:flex">
            <CheckCircle2
              strokeWidth={1.5}
              width={20}
              height={20}
              className="text-blackDimmed fill-cyanDark"
            />
            <span className="cursor-pointer font-roboto hover:underline underline-offset-2">
              Accepting Projects / {currentMonth}
            </span>
          </div>
          <div className="w-4 cursor-pointer">
            <Menu strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default Navbar;
