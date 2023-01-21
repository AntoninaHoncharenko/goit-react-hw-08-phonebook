import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: #004d00;
`;

export const Header = styled.header`
  height: 70px;
  border-bottom: 1px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Link = styled(NavLink)`
  font-size: 24px;
  color: black;
  text-decoration: none;
`;
