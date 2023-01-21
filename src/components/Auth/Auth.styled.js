import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;
  color: black;
  text-decoration: none;

  &:first-child {
    margin-right: 20px;
  }
`;
