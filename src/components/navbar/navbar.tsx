import Link from "next/link";

import * as S from "./navbar.style";
import { usePathname } from "next/navigation";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const path = usePathname();

  return (
    <>
      <S.NavBar>
        {MENU_LIST.map(({ href, text }) => (
          <S.NavBarLink key={text} href={href} $pathName={path}>
            {text}
          </S.NavBarLink>
        ))}
      </S.NavBar>
    </>
  );
};

export { Navbar };
