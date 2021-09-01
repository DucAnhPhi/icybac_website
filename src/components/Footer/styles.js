import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;

    .spacing-top {
        margin-top: 20px;
    }

    .spacing-top-dynamic {
        margin-top: 0;
        @media (max-width: 700px) {
            margin-top: 38px;
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Link = styled.a`
    display: block;
    font-weight: bold;
    color: #eb5e57;
    margin-top: 10px;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const Text = styled.div`
    margin: 5px 0;
`;

export const Outer = styled.div`
    display: flex;
    background-color: white;
    justify-content: center;
`;