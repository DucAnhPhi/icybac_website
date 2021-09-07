import styled from 'styled-components';

export const Wrapper = styled.p`
    font-size: 18px;

    @media (max-width: 600px) {
        font-size: 15px;
        margin-block-start: 1em;
        margin-block-end: 1em;
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
      `
      : `
        margin-bottom: 30px;
      `
    }
`