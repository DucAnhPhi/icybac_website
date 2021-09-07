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
`