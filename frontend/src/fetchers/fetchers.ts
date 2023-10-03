import { WeatherAPIRes } from "@/types/types";

export const getWeatherInfo = async () => {
  // Poznań longitude and latitude
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.4069&longitude=16.9299&current_weather=true";

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok)
    return {
      success: false,
      temperature: 0,
      windspeed: 0,
      winddirection: 0,
      weathercode: 0,
      is_day: 0,
      time: "",
    };
  const data: WeatherAPIRes = await res.json();
  return { ...data.current_weather, success: true };
};
