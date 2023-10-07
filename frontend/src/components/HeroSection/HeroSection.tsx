import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";

const MarqueeComponent = dynamic(() => import("./MarqueeComponent"));

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-around w-full h-almostFull">
      <div className="container flex items-center h-5/6">
        <Hero />
      </div>
      <div className="w-full h-1/6">
        <MarqueeComponent />
      </div>
    </section>
  );
};

export default HeroSection;
