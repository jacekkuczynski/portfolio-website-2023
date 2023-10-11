import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex flex-row items-center gap-2 cursor-pointer sm:gap-0 sm:items-end sm:flex-col text-whiteDimmed bg-blackDimmed">
        <div className="uppercase font-inter text-titleSmall leading-8 tracking-[-0.15rem] font-bold whitespace-nowrap">
          <span className="hidden sm:block">Jacek Kuczyński</span>
          <span className="block sm:hidden">JK</span>
        </div>
        <div className="leading-3 text-contentSmall font-extralight sm:font-medium ">
          frontend software developer
        </div>
      </div>
    </Link>
  );
};

export default Logo;
