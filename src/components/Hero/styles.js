import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    height: 90vh;
`

export const HeroContent = styled.div`
    position: relative;
    grid-area: 1/1;
    color: white;
    display: grid;
    place-items: center;
    padding: 0 150px;
    font-size: 18px;
    text-align: center;

    @media (max-width: 600px) {
        padding: 0 50px;
        font-size: 15px;
    }
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 30px;

    span {
        font-weight: normal;
        font-style: italic;
        text-align: center;
    }

    @media (max-width: 600px) {
        font-size: 25px;
    }
`;

export const Button = styled.a`
    font-weight: bold;
    font-size: 60px;
    color: white;
    width: 100%;
    display: block;

    @media (max-width: 600px) {
        font-size: 50px;
    }
    :hover {
        cursor: pointer;
        color: black;
    }
`;