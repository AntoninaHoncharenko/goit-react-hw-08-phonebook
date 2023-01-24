import styled from 'styled-components';

export const User = styled.p`
  font-size: 24px;
  color: black;
  margin-right: 15px;
`;

export const LogOutBtn = styled.button`
  width: 110px;

  font-size: 24px;
  margin-right: 20px;
  color: black;
  border: none;
  padding: 6px 12px;
  border-radius: 30px;
  cursor: pointer;
  background: linear-gradient(90deg, #ff0000, #ffff00);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: rgba(255, 0, 0, 0.7) 0px 5px 15px;
  }
`;
