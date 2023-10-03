import Hero from "@/components/Hero/Hero";
import Marquee from "react-fast-marquee";

const marqueeContent = [
  "frontend developer",
  "web developer",
  "fullstack web developer",
  "frontend engineer",
  "creative web developer",
  "html programmer",
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-around w-full h-almostFull">
        <div className="container flex items-center h-5/6">
          <Hero />
        </div>
        <div className="w-full h-1/6">
          <Marquee autoFill speed={35} className="w-20 h-full">
            <p className="pr-2 overflow-y-hidden font-bold leading-loose text-whiteDimmed font-raleway text-titleSmall md:text-titleMedium lg:text-titleLarge">
              {marqueeContent.map((el) => (
                <span key={el}>{el} / </span>
              ))}
            </p>
          </Marquee>
        </div>
      </section>
      <div className="h-screen">hello world</div>
      <div className="h-screen">hello world</div>
      <div className="h-screen">hello world</div>
      <div className="h-screen">hello world</div>
    </>
  );
}
