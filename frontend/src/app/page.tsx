import Greetings from "@/components/Greetings/Greetings";
import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 text-white bg-blackDimmed">
      <div className="h-screen">
        <Greetings />
        hello world
      </div>
      <div className="h-screen">hello world</div>
      <div className="h-screen">hello world</div>
      <div className="h-screen">hello world</div>
      <div className="h-screen">hello world</div>
    </div>
  );
}
