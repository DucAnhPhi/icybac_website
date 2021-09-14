import React from 'react';
import { Wrapper } from './styles';

export const Title = ({children, white, nomargin, center}) => (
    <Wrapper white={white} nomargin={nomargin} center={center}>
        {children}
    </Wrapper>
);