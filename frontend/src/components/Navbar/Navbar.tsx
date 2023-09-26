import Logo from "../Logo/Logo";
import ScrollProgress from "./ScrollProgress";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between h-20 px-20 border-b-1 border-grey1 bg-blackDimmed">
      <Logo />
      <ScrollProgress />
    </nav>
  );
};

export default Navbar;
