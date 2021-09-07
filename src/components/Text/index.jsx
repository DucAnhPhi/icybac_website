import React from 'react';
import { Wrapper } from './styles';

export const Text = ({children, white, nomargin}) => (
    <Wrapper white={white} nomargin={nomargin}>
        {children}
    </Wrapper>
);