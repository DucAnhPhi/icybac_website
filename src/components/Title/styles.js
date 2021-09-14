import styled from 'styled-components';

export const Wrapper = styled.h1`
    font-size: 32px;

    @media (max-width: 600px) {
        font-size: 25px;
        margin-bottom: 20px;
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