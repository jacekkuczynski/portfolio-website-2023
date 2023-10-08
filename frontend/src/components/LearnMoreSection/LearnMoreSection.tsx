import CategoryCard from "../CategoryCard/CategoryCard";

const LearnMoreSection = () => {
  return (
    <section className="container w-full p-4 lg:p-16 md:p-8">
      {/* <h3 className="font-bold text-titleSmall md:text-titleMedium text-whiteDimmed font-raleway">
        More about me:
      </h3> */}
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full gap-8 md:w-fit lg:place-content-center lg:grid lg:grid-cols-2 ">
          {new Array(4).fill(0).map((el) => (
            <CategoryCard key={crypto.randomUUID()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
