import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 70px;
  padding: 0 15vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  @media (max-width: 1350px) {
    padding: 0 50px;
  }

  @media (max-width: 1000px) {
    padding: 0 85px 0 30px;
  }
`;

export const Button = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  color: white;
  background-color: black;
  border-radius: 4px;
  &:hover {
    color: #eb5e57;
    background-color: white;
    border: 1px solid #eb5e57;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    position: absolute;
    left: 0;
    top: 70px;
    border-radius: 0;
    width: 100%;
    height: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 525px;
  @media (max-width: 1000px) {
    width: 175px;
  }
`;