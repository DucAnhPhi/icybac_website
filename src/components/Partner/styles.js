import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

export const Content = styled.div`
    width: 700px;
    @media (max-width: 800px) {
        width: auto;
    }
`;