import Link from "next/link";
import Image from "next/image";
import notFound from "./not-found.gif";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h3 className="font-bold uppercase text-titleSmall md:text-titleMedium lg:text-titleLarge text-cyan font-raleway">
        404
      </h3>
      <Image src={notFound} alt={"not found gif"} />
      <Link href="/">Return Home</Link>
    </div>
  );
}
