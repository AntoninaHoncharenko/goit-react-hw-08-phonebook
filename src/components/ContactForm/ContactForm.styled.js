import styled from 'styled-components';

export const Form = styled.form`
  border: 2px solid black;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 20px;
  background-color: #f4f4f4;
`;

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const ContactInput = styled.input`
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
    border: 2px solid #008000;
  }
`;

export const AddBtn = styled.button`
  width: 250px;
  height: 35px;
  padding: 3px 6px;
  border-radius: 4px;
  margin: 8px auto 0px;
  border: none;
  font-size: 18px;
  background-color: #3cd03c;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #198d19;
  }
`;
