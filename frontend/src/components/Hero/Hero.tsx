import dynamic from "next/dynamic";
import PlaySoundIcon from "./PlaySoundIcon";
import { Mail } from "lucide-react";
import Button from "../Button/Button";
import BookCallDialogButton from "./BookCallDialogButton";

const Greetings = dynamic(() => import("../Greetings/Greetings"), {
  loading: () => <p>hello</p>,
});

const description =
  "I'm a web developer from Poznań, Poland, with a strong focus on modern frontend technologies. I specialize in creating websites and apps that help companies and individuals establish a strong web presence.";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full col-start-2 gap-10 mt-16 mb-12 text-grey3">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col font-bold uppercase font-raleway text-titleSmall sm:text-titleMedium lg:text-titleLarge">
          <Greetings />
          <div className="flex flex-col items-start gap-0 leading-none sm:items-center sm:gap-2 w-fit sm:flex-row">
            <div className="flex gap-2">
              <span>I&apos;m</span>
              <h1 className="tracking-tighter text-whiteDimmed whitespace-nowrap">
                Jacek Kuczyński
              </h1>
            </div>
            <PlaySoundIcon />
          </div>
        </div>
        <p className="w-full md:w-[45rem] text-leadingSmall sm:text-leadingMedium lg:text-leadingLarge leading-[1.4] font-normal font-raleway">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-4 cursor-pointer sm:flex-row font-roboto text-contentSmall sm:text-contentMedium lg:text-contentLarge">
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
