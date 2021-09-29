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
    h2 {
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
    margin: 50px 0;
`;

export const Approach = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;

    .separator {
        border-color: #eb5e56;
        border-style: solid;
        width: 66px;
        border-bottom-width: 0px;
        margin-left: 150px;
    }

    @media (max-width: 1500px) {
        .padding {
            padding: 30px 50px;
        }
    }

    @media (max-width: 1000px) {
        .separator {
            margin-left: 0
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1500px) {
        flex-direction: column;
    }
`;

export const Cell = styled.div`
    flex: 1;
    p,h1,h2 {
        padding: 0 150px;
    }

    .cellImage {
        height: 600px;
    }

    @media (max-width: 1500px) {
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .cellImage {
            height: 500px;
        }
    }

    @media (max-width: 1000px) {
        p,h1,h2 {
            padding: 0;
        }

        .cellImage {
            height: 400px;
        }
    }
`;