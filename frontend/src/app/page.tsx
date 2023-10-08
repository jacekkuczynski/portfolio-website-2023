import CategoryCard from "@/components/CategoryCard/CategoryCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import dynamic from "next/dynamic";

// const NonProfitSection = dynamic(
//   () => import("@/components/NonProfitSection/NonProfitSection")
// );

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <NonProfitSection /> */}
      <div className="container h-screen">
        <CategoryCard />
      </div>
      <div className="h-screen "></div>
      <div className="h-screen "></div>
      <div className="h-screen "></div>
    </>
  );
}
