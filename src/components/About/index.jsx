import React from 'react';
import { Wrapper } from './styles';
import { Title, Text } from '../index';

export const About = () => (
    <Wrapper id="überuns">
        <div className="stat">
            <Title white center nomargin>75</Title>
            <Text white nomargin>Mitarbeiter</Text>
        </div>
        <div className="stat">
            <Title white center nomargin>
                100
            </Title>
            <Text white nomargin>
                Gemeinden
            </Text>
        </div>
        <div className="stat">
            <Title white center nomargin>
                5
            </Title>
            <Text white nomargin>Kühllager</Text>
        </div>
        <div className="stat">
            <Title white center nomargin>10</Title>
            <Text white nomargin>LKWs</Text>
        </div>
    </Wrapper>
);