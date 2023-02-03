import Link from "next/link";

import styled from "styled-components";
import { StyleNavbarTypes } from "./navbar.type";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  flex-direction: column;

  text-align: center;

  background: #63d471;
`;
export const NavBarLink = styled(Link)<StyleNavbarTypes>`
  width: 100%;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
  color: ${({ href, $pathName }) => (href === $pathName ? "#987" : "#fff")};
  background-color: ${({ href, $pathName }) =>
    href === $pathName ? "#333" : "#eaaa00"};
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`;
