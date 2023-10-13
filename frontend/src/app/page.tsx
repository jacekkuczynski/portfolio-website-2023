import BackgroundAnimDecor from "@/components/BackgroundAnimDecor/BackgroundAnimDecor";
import HeroSection from "@/components/HeroSection/HeroSection";
import LearnMoreSection from "@/components/LearnMoreSection/LearnMoreSection";
import HamburgerMenu from "@/components/Navbar/HamburgerMenu";
import NonProfitSection from "@/components/NonProfitSection/NonProfitSection";

export default function Home() {
  return (
    <>
      <BackgroundAnimDecor />

      <HeroSection />
      {/* <NonProfitSection /> */}
      <LearnMoreSection />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
