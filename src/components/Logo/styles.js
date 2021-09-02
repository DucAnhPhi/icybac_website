import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  align-items: center;
  color: black;
  :hover {
    cursor: pointer;
  }
`;

export const Brand = styled.a`
  display: flex;
  width: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  display: block;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;