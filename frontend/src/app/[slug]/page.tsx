import CategoryContent from "@/components/CategoryContent/CategoryContent";
import { getAllCategoriesData, getCategoryData } from "@/fetchers/fetchers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allCategoriesData = await getAllCategoriesData();
  return allCategoriesData.map((category) => ({
    slug: category.slug,
  }));
}

// does not work in production in next 13.5.4 - known issue, currently unresolved
// export const dynamicParams = false;

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // own implementation of dynamicParams = false
  const allCategoriesData = await getAllCategoriesData();
  const allParams = allCategoriesData.map((category) => category.slug);
  if (!allParams.includes(slug)) notFound();

  const { content } = await getCategoryData(slug);
  return (
    <div className="container flex flex-col items-center justify-center w-full min-h-screen">
      <CategoryContent content={content} />
    </div>
  );
}
