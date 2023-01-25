import styled from 'styled-components';

export const ContactItem = styled.li`
  width: 320px;
  height: 70px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid black;
  background-color: white;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ContactName = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
  color: #006600;
`;

export const ContactNumber = styled.p`
  font-size: 18px;
`;

export const DeleteBtn = styled.button`
  width: 80px;
  height: 35px;
  margin: auto 0;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  background-color: #ff4d4d;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #ff0000;
  }
`;
