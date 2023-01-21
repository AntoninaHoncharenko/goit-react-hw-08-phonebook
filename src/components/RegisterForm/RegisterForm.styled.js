import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 250px;
`;

export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const RegisterInput = styled.input`
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

export const RegisterBtn = styled.button`
  width: 250px;
  height: 35px;
  padding: 3px 6px;
  border-radius: 4px;
  margin: 0 auto;
  border: none;
  font-size: 18px;
  background-color: #98fb98;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #90ee90;
  }
`;
