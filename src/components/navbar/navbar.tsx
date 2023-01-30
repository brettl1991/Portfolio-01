import Link from "next/link";

import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  return (
    <header>
      <nav>
        {MENU_LIST.map(({ href, text }) => (
          <Link key={text} href={href}>
            {text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export { Navbar };
