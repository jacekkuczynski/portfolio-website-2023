import CategoryCard from "@/components/CategoryCard/CategoryCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import NonProfitSection from "@/components/NonProfitSection/NonProfitSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NonProfitSection />
      <div className="container h-screen">
        <CategoryCard />
      </div>
      <div className="h-screen "></div>
      <div className="h-screen "></div>
      <div className="h-screen "></div>
    </>
  );
}
