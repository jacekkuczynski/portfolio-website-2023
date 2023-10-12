"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {};
  return (
    <button onClick={handleMenu} className="flex items-center justify-center">
      <Menu strokeWidth={1.5} />
    </button>
  );
};

export default HamburgerMenu;
