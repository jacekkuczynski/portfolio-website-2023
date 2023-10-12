import dynamic from "next/dynamic";
import PlaySoundIcon from "./PlaySoundIcon";
import { Mail } from "lucide-react";
import Button from "../Button/Button";

const Greetings = dynamic(() => import("../Greetings/Greetings"), {
  loading: () => <p>hello</p>,
});

const BookCallDialogButton = dynamic(() => import("./BookCallDialogButton"));

const description =
  "I'm a web developer from Poznań, Poland, with a strong focus on modern frontend technologies. I specialize in creating websites and apps that help companies and individuals establish a strong web presence.";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full col-start-2 gap-10 mt-16 mb-12">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col title">
          <Greetings />
          <div className="flex flex-col items-start gap-0 leading-none sm:items-center sm:gap-2 w-fit sm:flex-row">
            <div className="flex gap-2 title">
              <span className="text-grey3">I&apos;m</span>
              <h1 className=" whitespace-nowrap">Jacek Kuczyński</h1>
            </div>
            <PlaySoundIcon />
          </div>
        </div>
        <h2 className="w-full md:w-[45rem] leading">{description}</h2>
      </div>

      <div className="flex flex-col gap-4 cursor-pointer sm:flex-row content">
        <BookCallDialogButton />
        <Button variant={"secondary"}>
          <Mail width={24} height={24} strokeWidth={1.5} />
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Hero;
