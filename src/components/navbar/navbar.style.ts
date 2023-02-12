import Link from "next/link";

import styled from "styled-components";
import { StyleNavbarTypes } from "./navbar.type";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 10px;
  background-color: #fff;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  background: rgba(107, 118, 136, 0.1);
`;
export const NavBarLink = styled(Link)<StyleNavbarTypes>`
  width: 100%;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
  color: ${({ href, $pathName }) =>
    href === $pathName ? "#F06292" : "#6B7688"};
  background-color: ${({ href, $pathName }) =>
    href === $pathName ? "#fff" : ""};
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`;
