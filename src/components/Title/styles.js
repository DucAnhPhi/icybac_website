import styled from 'styled-components';

export const Wrapper = styled.h1`
    font-size: 42px;

    @media (max-width: 600px) {
        font-size: 25px;
        margin-bottom: 20px;
    }
    ${({ center }) =>
    center
      ? `
        text-align: center;
      `
      : `
        text-align: left;
      `
    }
    ${({ white }) =>
    white
      ? `
        color: white;
      `
      : `
        color: black;
      `
    }
    ${({ nomargin }) =>
    nomargin
      ? `
        margin: 0;
        @media (max-width: 600px) {
            margin: 0;
        }
      `
      : `
        margin-bottom: 30px;
      `
    }
`