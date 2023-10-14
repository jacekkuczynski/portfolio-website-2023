import dynamic from "next/dynamic";
import PlaySoundIcon from "./PlaySoundIcon";
import { Mail } from "lucide-react";
import Button from "../Button/Button";
import { getGlobalVariables } from "@/fetchers/fetchers";

const Greetings = dynamic(() => import("../Greetings/Greetings"), {
  loading: () => <p>hello</p>,
});

const BookCallDialogButton = dynamic(
  () => import("../BookCallDialogButton/BookCallDialogButton")
);

const Hero = async () => {
  const { email, heroDescription } = await getGlobalVariables();

  return (
    <div className="flex flex-col justify-center w-full col-start-2 gap-10 mt-16 mb-12">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col title sm:text-titleMedium">
          <Greetings />
          <div className="flex flex-col items-start gap-0 leading-none sm:items-center sm:gap-2 w-fit sm:flex-row">
            <div className="flex gap-2">
              <span className="text-grey3">I&apos;m</span>
              <h1 className=" whitespace-nowrap">Jacek Kuczyński</h1>
            </div>
            <PlaySoundIcon />
          </div>
        </div>
        <h2 className="w-full md:w-[45rem] leading">{heroDescription}</h2>
      </div>

      <div className="flex flex-col gap-4 cursor-pointer sm:flex-row content">
        <BookCallDialogButton />
        <a href={`mailto:${email}`} className="w-full">
          <Button variant={"secondary"}>
            <Mail width={24} height={24} strokeWidth={1.5} />
            Send me an email{" "}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
