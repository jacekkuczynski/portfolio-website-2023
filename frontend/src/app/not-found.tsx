import Link from "next/link";
import Image from "next/image";
import notFound from "./not-found.gif";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <h3 className="title text-cyan">404</h3>
      <Image src={notFound} alt={"not found gif"} />
      <Link href="/">Return Home</Link>
    </div>
  );
}
