import { getAllCategoriesData, getGlobalVariables } from "@/fetchers/fetchers";
import Link from "next/link";

const Footer = async () => {
  const { email } = await getGlobalVariables();
  const routes = await getAllCategoriesData().then((res) => {
    res.sort((a, b) => a.order - b.order);
    return res.map((category) => category.slug);
  });

  return (
    <footer className="w-full border-t-2 bg-blackDimmed border-cyan h-auto md:h-[150px] p-6">
      <div className="container flex items-start justify-between h-full sm:items-center">
        <div className="leading text-whiteDimmed">{email}</div>
        <ul className="grid grid-cols-2 gap-6 sm:flex content text-grey4 sm:flex-row sm:gap-5">
          <li className="transition-colors ease-in-out hover:text-whiteDimmed">
            <Link href={"/"}>start</Link>
          </li>
          {routes.map((route) => (
            <li
              key={route}
              className="transition-colors ease-in-out hover:text-whiteDimmed"
            >
              <Link href={route}>{route}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
