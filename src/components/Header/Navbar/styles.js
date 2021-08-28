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
export const Logo = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 120px;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const Brand = styled.a`
  color: #000;
  display: block;
  font-weight: bold;
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
    border: 2px solid #eb5e57;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 715px;
  @media (max-width: 1000px) {
    width: 175px;
  }
`;