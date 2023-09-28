import Hero from "@/components/Hero/Hero";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <section className="grid justify-between w-full h-screen grid-cols-12 ">
        <div className="flex items-center w-full h-full col-start-2 px-20 pb-32">
          <Hero />
        </div>
        <div className="w-full col-start-1 col-end-13 ">
          <Marquee autoFill className="w-full ">
            <p className="overflow-y-hidden font-bold leading-none text-whiteDimmed font-raleway text-title">
              frontend developer / web developer / fullstack web developer /
              frontend engineer / creative web developer/ html programmer{" "}
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
