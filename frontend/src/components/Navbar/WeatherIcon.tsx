import {
  MoonStar,
  CloudMoon,
  CloudMoonRain,
  Sun,
  CloudSun,
  Cloudy,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudFog,
  Wind,
  Tornado,
  CloudSunRain,
} from "lucide-react";
import _ from "lodash";

const WeatherIcon = ({ code, isDay }: { code: number; isDay: number }) => {
  const getIcon = (code: number, isDay: number) => {
    switch (true) {
      case _.inRange(code, 0, 5) && !isDay:
        return MoonStar;

      case _.inRange(code, 5, 18) && !isDay:
        return CloudMoon;

      case _.inRange(code, 18, 30) && !isDay:
        return CloudMoonRain;

      case _.inRange(code, 60, 70) && !isDay:
        return CloudMoon;

      case _.inRange(code, 80, 90) && !isDay:
        return CloudMoonRain;

      case _.inRange(code, 0, 5):
        return Sun;

      case _.inRange(code, 5, 8):
        return CloudSun;

      case _.inRange(code, 8, 18):
        return Cloudy;

      case _.inRange(code, 18, 30):
        return CloudRain;

      case _.inRange(code, 30, 36):
        return CloudLightning;

      case _.inRange(code, 36, 51):
        return CloudSnow;

      case _.inRange(code, 51, 60):
        return CloudFog;

      case _.inRange(code, 60, 70):
        return Wind;

      case _.inRange(code, 70, 79):
        return Tornado;

      case _.inRange(code, 80, 90):
        return CloudSunRain;

      default:
        return CloudSunRain;
    }
  };

  const iconProps = {
    strokeWidth: 1.5,
    width: 24,
    height: 24,
  };

  const Component = getIcon(code, isDay);

  return Component ? <Component {...iconProps} /> : null;
};

export default WeatherIcon;
