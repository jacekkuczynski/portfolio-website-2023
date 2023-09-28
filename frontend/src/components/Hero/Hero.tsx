import { CalendarPlus, Volume2 } from "lucide-react";
import dynamic from "next/dynamic";
import PlaySoundIcon from "../PlaySoundIcon/PlaySoundIcon";
import { Mail } from "lucide-react";

const Greetings = dynamic(() => import("../Greetings/Greetings"), {
  loading: () => <p>hello</p>,
});

const description =
  "I'm a web developer from Poznań, Poland, with a strong focus on modern frontend technologies. I specialize in creating websites and apps that help companies and individuals establish a strong web presence.";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center col-start-2 gap-10 px-20 text-grey3 w-fit">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col font-bold uppercase font-raleway text-title ">
          <Greetings />
          <div className="flex flex-row items-center gap-2 leading-none w-fit ">
            <span>I&apos;m</span>
            <span className="text-whiteDimmed whitespace-nowrap ">
              Jacek Kuczyński
            </span>
            <PlaySoundIcon />
          </div>
        </div>
        <p className="w-[45rem] text-leading leading-[1.4] font-normal font-raleway">
          {description}
        </p>
      </div>

      <div className="flex gap-4 font-bold font-roboto text-button">
        <button className="flex gap-5 transition-colors ease-in-out bg-cyan hover:bg-cyanLight px-buttonX py-buttonY text-blackDimmed">
          <CalendarPlus strokeWidth={1.5} width={24} height={24} />
          Book a call
        </button>
        <button className="flex gap-5 transition-colors ease-in-out bg-black hover:bg-grey3 px-buttonX py-buttonY text-whiteDimmed">
          <Mail width={24} height={24} strokeWidth={1.5} />
          Contact
        </button>
      </div>
    </div>
  );
};

export default Hero;
