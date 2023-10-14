import { CategoriesT, GlobalT, WeatherAPIRes } from "@/types/types";
import qs from "qs";

export const getWeatherInfo = async ([longitude, latitude]: [
  number,
  number
]) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok)
    return {
      temperature: 0,
      windspeed: 0,
      winddirection: 0,
      weathercode: 0,
      is_day: 0,
      time: "",
    };
  const data: WeatherAPIRes = await res.json();
  return data.current_weather;
};

const serverUrl = process.env.SERVER_URL;

export const getAllCategoriesData = async () => {
  const url = `${serverUrl}/categories/`;
  const res = await fetch(url);
  const data: CategoriesT = await res.json();
  return data.docs;
};

export const getCategoryData = async (slugValue: string) => {
  const query = {
    slug: {
      equals: slugValue,
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    { addQueryPrefix: true }
  );

  const url = `${serverUrl}/categories${stringifiedQuery}`;
  const res = await fetch(url);
  const data: CategoriesT = await res.json();
  return data.docs[0];
};

export const getGlobalVariables = async () => {
  const url = `${serverUrl}/globals/variables`;
  const res = await fetch(url);
  const data: GlobalT = await res.json();
  return data;
};
