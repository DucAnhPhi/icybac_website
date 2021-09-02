import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`

export const Content = styled.div`
    width: 700px;
    @media (max-width: 800px) {
        width: auto;
    }
`;

export const Bullet = styled.div`
    display: flex;
    flex-direction: row;
    h3 {
        flex: 1;
    }
    p {
        flex: 3;
    }
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Section = styled.div`
    margin-top: 50px;
`;