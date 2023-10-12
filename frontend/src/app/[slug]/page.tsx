export const dynamicParams = false;

import CategoryContent from "@/components/CategoryContent/CategoryContent";
import { getAllCategoriesData, getCategoryData } from "@/fetchers/fetchers";

export async function generateStaticParams() {
  const categories = await getAllCategoriesData();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content } = await getCategoryData(slug);
  return (
    <div className="container flex flex-col items-center justify-center w-full">
      <CategoryContent content={content} />
    </div>
  );
}
