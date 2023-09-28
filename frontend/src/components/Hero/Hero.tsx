import { Mail } from "lucide-react"
 
import { Button } from "@/components/ui/button"import dynamic from "next/dynamic";
import PlaySoundIcon from "../PlaySoundIcon/PlaySoundIcon";

const Greetings = dynamic(() => import("../Greetings/Greetings"), {
  loading: () => <p>hello</p>,
});

const description =
  "I'm a web developer from Poznań, Poland, with a strong focus on modern frontend technologies. I specialize in creating websites and apps that help companies and individuals establish a strong web presence.";

const Hero = () => {
  return (
    <div className="flex flex-col w-auto gap-10 text-grey3">
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

      <div className="flex gap-4">
        <Button>
          <Mail className="w-4 h-4 mr-2" /> Login with Email
        </Button>
        <button></button>
      </div>
    </div>
  );
};

export default Hero;
