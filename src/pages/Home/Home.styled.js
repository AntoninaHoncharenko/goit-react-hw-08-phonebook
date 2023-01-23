import styled from 'styled-components';

export const HomeText = styled.h1`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  margin: auto;
  color: black;

  animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      transform: scale(30%);
    }

    to {
      transform: scale(100%);
    }
  }
`;
