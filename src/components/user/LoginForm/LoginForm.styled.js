import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 310px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 30px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const LoginInput = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 8px;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 18px;
  transition: border 300ms linear;

  &:hover,
  &:focus {
    border: 2px solid #006600;
  }
`;

export const LoginBtn = styled.button`
  width: 250px;
  height: 35px;
  padding: 3px 6px;
  border-radius: 4px;
  margin: 0 auto;
  border: none;
  font-size: 18px;
  background-color: #b5ff44;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #32cd32;
  }
`;
