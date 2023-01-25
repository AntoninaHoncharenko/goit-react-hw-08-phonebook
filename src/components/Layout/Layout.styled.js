import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdContactPhone } from 'react-icons/md';

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

export const ContactLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  transition: color 250ms linear;

  :hover,
  :focus {
    color: #0000cc;
  }
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;

  background: linear-gradient(
    90deg,
    #ff0000,
    #ffff00,
    #008000,
    #ff00f3,
    #0033ff,
    #ff00c4,
    #ff0000
  );

  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 400%;
  animation: animate 10s linear infinite;

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }

  :hover {
    animation-play-state: paused;
  }
`;

export const Icon = styled(MdContactPhone)`
  color: #0000cc;
`;

export const HomeText = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-left: 6px;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
