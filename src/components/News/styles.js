import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;

    .position {
        position: absolute;
        right: 0;
        top: 0;
    }

    .hide-desktop {
        display: none;
    }

    @media (max-width: 1100px) {
        padding: 50px 0;

        .hide-mobile {
            display: none;
        }

        .hide-desktop {
            display: flex;
        }
    }
`;

export const Header = styled.div`
    position: relative;
    margin-bottom: 60px;
`;

export const Link = styled.a`
    font-weight: bold;
    color: #eb5e56;
`;

export const Content = styled.div`
    width: 1300px;

    .thumbnail {
        height: 300px;
    }
    @media (max-width: 1400px) {
        width: 1000px;
        .thumbnail {
            height: 250px;
        }
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const Button = styled.a`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  color: white;
  background-color: black;
  border-radius: 4px;
  margin-top: 70px;
`;