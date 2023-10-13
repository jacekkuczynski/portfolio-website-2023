export interface WeatherAPIRes {
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
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
  content: ContentT;
};

export type ContentT = BlockT[];

export type BlockT =
  | TitleBlockT
  | BookBlockT
  | ContentWithPhotosBlockT
  | IconsBlockT
  | ProjectBlockT;

export type TitleBlockT = {
  title: string;
  description: string;
  id: string;
  blockType: BlockTypeT;
};

export type BookBlockT = {
  books: BookT[];
  id: string;
  blockType: BlockTypeT;
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
  blockType: BlockTypeT;
};

export type ContentWithPhotosBlockT = {
  title: string;
  leading: string;
  richTextContent: RichTextContentT;
  photos: { photo: ImageT }[];
  id: string;
  blockType: BlockTypeT;
};

export type IconsBlockT = {
  sectionTitle: string;
  icons: { iconName: string; iconImage: ImageT; id: string; link: string }[];
  id: string;
  blockType: BlockTypeT;
};

// TODO extend RichTextContentT
export type RichTextContentT = any;

export type BookT = {
  cover: ImageT;
  title: string;
  author: string;
  id: string;
  index: number;
};

export type BlockTypeT =
  | "titleBlock"
  | "booksBlock"
  | "projectBlock"
  | "iconsBlock"
  | "contentWithPhotosBlock";

export type GlobalT = {
  titles: { title: string; id: string }[];
  acceptingProjects: boolean;
  location: [number, number];
  globalType: string;
  createdAt: Date;
  updatedAt: Date;
  city: string;
  email: string;
  heroDescription: string;
  id: string;
};
