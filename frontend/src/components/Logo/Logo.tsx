import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex flex-col items-end cursor-pointer text-whiteDimmed bg-blackDimmed">
        <h1 className="uppercase font-inter text-[2rem] leading-8 tracking-[-0.15rem] font-bold">
          Jacek Kuczyński
        </h1>
        <h2 className="text-[1rem] font-medium leading-3 tracking-[-0.08rem]">
          frontend software developer
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
