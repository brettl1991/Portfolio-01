import Link from "next/link";

import * as S from "./navbar.style";
import { usePathname } from "next/navigation";

const MENU_LIST = [
  { text: "About Me", href: "/" },
  { text: "Resume", href: "/resume" },
  { text: "Projects", href: "/projects" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const path = usePathname();

  return (
    <S.NavBarContainer>
      <S.NavBar>
        {MENU_LIST.map(({ href, text }) => (
          <S.NavBarLink key={text} href={href} $pathName={path}>
            {text}
          </S.NavBarLink>
        ))}
      </S.NavBar>
    </S.NavBarContainer>
  );
};

export { Navbar };
