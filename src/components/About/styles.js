import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    color: white;

    .stat {
        flex: 1;
        height: 200px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        text-align: center;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        padding: 20px 0;

        .stat {
            padding: 10px 0;
        }
    }
`