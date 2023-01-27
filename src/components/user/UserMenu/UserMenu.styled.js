import styled from 'styled-components';

export const User = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 24px;
    color: black;
    margin-right: 15px;
  }
`;

export const LogOutBtn = styled.button`
  width: 80px;
  font-size: 18px;
  color: black;
  border: none;
  padding: 8px 9px;
  border-radius: 30px;
  cursor: pointer;
  background: linear-gradient(90deg, #ff0000, #ffff00);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: rgba(255, 0, 0, 0.7) 0px 5px 15px;
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 40px;
    font-size: 24px;
    padding: 6px 12px;
  }
`;
