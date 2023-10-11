import HeroSection from "@/components/HeroSection/HeroSection";
import LearnMoreSection from "@/components/LearnMoreSection/LearnMoreSection";
import NonProfitSection from "@/components/NonProfitSection/NonProfitSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <NonProfitSection /> */}
      <LearnMoreSection />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
