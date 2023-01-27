import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkUp = styled(NavLink)`
  width: 80px;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  text-decoration: none;
  padding: 8px 9px;
  border-radius: 30px;
  background: linear-gradient(90deg, #ff00f3, #0033ff);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: rgba(0, 51, 255, 0.7) 0px 5px 15px;
  }

  &.active {
    box-shadow: rgba(0, 51, 255, 0.7) 0px 5px 15px;
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 40px;
    font-size: 24px;
    padding: 6px 12px;
  }
`;

export const LinkIn = styled(NavLink)`
  width: 80px;
  display: block;
  text-align: center;
  font-size: 18px;
  margin-right: 12px;
  color: black;
  text-decoration: none;
  padding: 8px 9px;
  border-radius: 30px;

  background: linear-gradient(90deg, #008000, #ffff00);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: rgba(0, 128, 0, 0.7) 0px 5px 15px;
  }

  &.active {
    box-shadow: rgba(0, 128, 0, 0.7) 0px 5px 15px;
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 40px;
    font-size: 24px;
    padding: 6px 12px;
  }
`;
