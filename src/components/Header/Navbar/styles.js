import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 70px;
  padding: 0 15vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  @media (max-width: 960px) {
    padding: 0 15vw 0 30px;
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