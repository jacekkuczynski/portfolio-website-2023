import HeroSection from "@/components/HeroSection/HeroSection";
import dynamic from "next/dynamic";

const NonProfitSection = dynamic(
  () => import("@/components/NonProfitSection/NonProfitSection")
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <NonProfitSection />
      <div className="h-screen text-cyan">hello world</div>
      <div className="h-screen text-cyan">hello world</div>
      <div className="h-screen text-cyan">hello world</div>
      <div className="h-screen text-cyan">hello world</div>
    </>
  );
}
