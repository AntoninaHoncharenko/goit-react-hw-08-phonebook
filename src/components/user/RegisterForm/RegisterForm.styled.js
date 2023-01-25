import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 310px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 30px;
  background-color: #f4f4f4;
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
    border: 2px solid #9400d3;
  }
`;

export const RegisterBtn = styled.button`
  width: 250px;
  height: 35px;
  padding: 3px 6px;
  border-radius: 4px;
  margin: 8px auto 0px;
  border: none;
  font-size: 18px;
  background-color: #9400d3;
  color: white;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #0033ff;
  }
`;
