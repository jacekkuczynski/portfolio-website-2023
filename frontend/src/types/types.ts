export interface WeatherAPIRes {
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
    success: boolean;
  };
}

export type ImageT = {
  id: string;
  alt: string;
  width: number;
  height: number;
  url: string;
};

export type CategoriesT = {
  docs: CategoryT[];
};

export type CategoryT = {
  id: string;
  name: string;
  slug: string;
  description: string;
  ImageT: ImageT;
  content: (TitleBlockT | BookBlockT | ContentWithPhotosBlockT | IconsBlock)[];
};

export type TitleBlockT = {
  title: string;
  description: string;
  id: string;
  blockType: string;
};

export type BookBlockT = {
  books: BookT[];
  id: string;
  blockType: string;
};

export type ProjectBlockT = {
  publish: boolean;
  title: string;
  shortDescription: string;
  image: ImageT;
  techs: { tech: string; id: string }[];
  features: { feature: string; id: string }[];
  longDescription: RichTextContentT[];
  repoLink: string;
  websiteLink: string;
  id: string;
  blockType: string;
};

export type ContentWithPhotosBlockT = {
  title: string;
  leading: string;
  richTextContent: RichTextContentT;
  photos: ImageT[];
  id: string;
  blockType: string;
};

// TODO extend RichTextContentT
export type RichTextContentT = { children: []; type: string }[];

export type IconsBlock = {
  sectionTitle: string;
  icons: { iconName: string; iconImage: ImageT; id: string }[];
  id: string;
  blockType: string;
};

export type BookT = {
  cover: ImageT;
  title: string;
  author: string;
  id: string;
};
