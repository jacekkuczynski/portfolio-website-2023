import { getGlobalVariables } from "@/fetchers/fetchers";
import Marquee from "react-fast-marquee";

const MarqueeComponent = async () => {
  const marqueeContent = await getGlobalVariables().then((res) => res.titles);

  return (
    <Marquee autoFill speed={35} className="w-20 h-full">
      <p className="pr-2 overflow-y-hidden leading-relaxed lowercase title">
        {marqueeContent.map((el) => (
          <span key={el.id}>{el.title} / </span>
        ))}
      </p>
    </Marquee>
  );
};

export default MarqueeComponent;
