import HeroSection from "@/components/HeroSection/HeroSection";
import LearnMoreSection from "@/components/LearnMoreSection/LearnMoreSection";
import NonProfitSection from "@/components/NonProfitSection/NonProfitSection";
import TitleBlock from "@/components/TitleBlock/TitleBlock";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <NonProfitSection /> */}
      <LearnMoreSection />

      <div className="h-screen">
        <TitleBlock title={"About"} description={"siema"} />
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
