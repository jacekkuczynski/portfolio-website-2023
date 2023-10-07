import Marquee from "react-fast-marquee";

const marqueeContent = [
  "frontend developer",
  "web developer",
  "fullstack web developer",
  "frontend engineer",
  "creative web developer",
  "html programmer",
];

const MarqueeComponent = () => {
  return (
    <Marquee autoFill speed={35} className="w-20 h-full">
      <p className="pr-2 overflow-y-hidden font-bold leading-loose text-whiteDimmed font-raleway text-titleSmall md:text-titleMedium lg:text-titleLarge">
        {marqueeContent.map((el) => (
          <span key={el}>{el} / </span>
        ))}
      </p>
    </Marquee>
  );
};

export default MarqueeComponent;
