import styled from 'styled-components';

export const User = styled.p`
  font-size: 24px;
  color: black;
  margin-right: 15px;
`;

export const LogOutBtn = styled.button`
  width: 100px;
  height: 45px;
  margin: auto 0;
  border: none;
  border-radius: 6px;
  font-size: 24px;
  background-color: #ff8080;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #ff4d4d;
  }
`;
