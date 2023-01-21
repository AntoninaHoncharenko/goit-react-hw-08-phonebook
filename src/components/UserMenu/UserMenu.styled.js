import styled from 'styled-components';

export const User = styled.p`
  font-size: 24px;
  color: #004d00;
  margin-right: 15px;
`;

export const LogOutBtn = styled.button`
  width: 80px;
  height: 40px;
  margin: auto 0;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  background-color: #ff8080;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #ff4d4d;
  }
`;
