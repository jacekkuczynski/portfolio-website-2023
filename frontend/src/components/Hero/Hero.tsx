import { Volume2 } from "lucide-react";
import dynamic from "next/dynamic";

const Greetings = dynamic(() => import("../Greetings/Greetings"), {
  loading: () => <p>hello</p>,
});

const description =
  "I'm a web developer from Poznań, Poland, with a strong focus on modern frontend technologies. I specialize in creating websites and apps that help companies and individuals establish a strong web presence.";

const Hero = () => {
  return (
    <div className="flex flex-col w-auto gap-10 text-grey3">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col font-bold font-raleway text-[4rem]  uppercase ">
          <Greetings />
          <div className="flex flex-row items-center gap-2 leading-none w-fit ">
            <span>I&apos;m</span>
            <span className="text-whiteDimmed whitespace-nowrap ">
              Jacek Kuczyński
            </span>
            <Volume2
              size={64}
              strokeWidth={1.5}
              className="hover:text-whiteDimmed"
            />
          </div>
        </div>
        <p className="w-[45rem] text-[1.6875rem] leading-[1.4] font-normal">
          {description}
        </p>
      </div>

      <div className="flex gap-4">
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Hero;
