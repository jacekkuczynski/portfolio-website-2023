import Hero from "@/components/Hero/Hero";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <section className="grid justify-between w-full h-full min-h-screen grid-cols-12">
        <Hero />
        <div className="flex items-end col-start-1 col-end-13 -translate-y-12">
          <Marquee autoFill>
            <p className="overflow-y-hidden font-bold leading-none text-whiteDimmed font-raleway text-title ">
              frontend developer / web developer / fullstack web developer /
              frontend engineer / creative web developer/ html programmer
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
