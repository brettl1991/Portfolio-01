import Link from "next/link";
import styled from "styled-components";

export const NavBar = styled.nav`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #63d471;
`;
export const NavBarLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
