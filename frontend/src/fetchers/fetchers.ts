import { WeatherAPIRes } from "@/types/types";

export const getWeatherInfo = async () => {
  // Poznań longitude and latitude
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.4069&longitude=16.9299&current_weather=true";

  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data: WeatherAPIRes = await res.json();
  return data.current_weather;
};
