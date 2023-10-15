import { getAllCategoriesData } from "@/fetchers/fetchers";
import CategoryCard from "../CategoryCard/CategoryCard";

const LearnMoreSection = async () => {
  const categoriesData = await getAllCategoriesData();
  return (
    <section className="container w-full p-4 lg:p-16 md:p-8">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full gap-8 md:w-fit lg:place-content-center lg:grid lg:grid-cols-2 ">
          {categoriesData
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              const { id, slug, name, description, image } = category;
              return (
                <CategoryCard
                  key={id}
                  slug={slug}
                  name={name}
                  description={description}
                  image={image}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
