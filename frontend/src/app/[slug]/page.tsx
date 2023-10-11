export const dynamicParams = false;

import { getAllCategoriesData, getCategoryData } from "@/fetchers/fetchers";

export async function generateStaticParams() {
  const categories = await getAllCategoriesData();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { description, name } = await getCategoryData(slug);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen font-bold text-cyan text-titleMedium">
      <p>{slug} it&apos;s dynamic?</p>
      <p>yes , but actually no</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
    </div>
  );
}
