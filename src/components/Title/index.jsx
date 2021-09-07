import React from 'react';
import { Wrapper } from './styles';

export const Title = ({children, white, nomargin}) => (
    <Wrapper white={white} nomargin={nomargin}>
        {children}
    </Wrapper>
);