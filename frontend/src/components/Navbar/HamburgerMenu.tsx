"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {};
  return (
    <button onClick={handleMenu}>
      <Menu strokeWidth={1.5} />
    </button>
  );
};

export default HamburgerMenu;
