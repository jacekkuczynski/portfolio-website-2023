import { getWeatherInfo } from "@/fetchers/fetchers";
import Logo from "../Logo/Logo";
import ScrollProgress from "./ScrollProgress";
import {
  CheckCircle2,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudRain,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Menu,
  MoonStar,
  Sun,
  Tornado,
  Wind,
} from "lucide-react";

const Navbar = async () => {
  const weather = await getWeatherInfo();
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

  const getWeatherIcon = () => {
    const code = weather.weathercode;
    const night = !weather.is_day;
    const iconProps = {
      strokeWidth: 1.5,
      width: 24,
      height: 24,
    };

    if (code >= 0 && code <= 4 && night) {
      return <MoonStar {...iconProps} />;
    } else if (code >= 5 && code <= 7 && night) {
      return <CloudMoon {...iconProps} />;
    } else if (code >= 80 && code <= 89 && night) {
      return <CloudMoonRain {...iconProps} />;
    } else if (code >= 0 && code <= 4) {
      return <Sun {...iconProps} />;
    } else if (code >= 5 && code <= 7) {
      return <CloudSun {...iconProps} />;
    } else if (code >= 8 && code <= 17) {
      return <Cloudy {...iconProps} />;
    } else if (code >= 18 && code <= 29) {
      return <CloudRain {...iconProps} />;
    } else if (code >= 30 && code <= 35) {
      return <CloudLightning {...iconProps} />;
    } else if (code >= 36 && code <= 50) {
      return <CloudSnow {...iconProps} />;
    } else if (code >= 51 && code <= 59) {
      return <CloudFog {...iconProps} />;
    } else if (code >= 60 && code <= 69) {
      return <Wind {...iconProps} />;
    } else if (code >= 70 && code <= 79) {
      return <Tornado {...iconProps} />;
    } else if (code >= 80 && code <= 89) {
      return <CloudSunRain {...iconProps} />;
    } else return null;
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-20 px-20 border-b-1 border-grey1 bg-blackDimmed text-whiteDimmed">
      <Logo />
      <div className="flex items-center content-center gap-10 uppercase text-small">
        <div className="flex gap-2.5 font-raleway items-center">
          {getWeatherIcon()}
          <span>
            {weather.temperature}ºC / Poznań / {currentTime}
          </span>
        </div>
        <div className="flex gap-2.5 items-center">
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
        <div className="cursor-pointer">
          <Menu strokeWidth={1.5} width={24} height={24} />
        </div>
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default Navbar;
