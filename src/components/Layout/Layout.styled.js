import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  /* height: 70px; */
  border-bottom: 2px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

export const Link = styled(NavLink)`
  font-size: 24px;
  color: black;
  text-decoration: none;
`;

export const HomeLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const HomeText = styled.p`
  margin-left: 6px;
`;
