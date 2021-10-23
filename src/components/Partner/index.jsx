import React from 'react';
import { Wrapper, Content } from './styles';
import { Title } from '../index';

export const Partner = () => (
    <Wrapper id="partner">
        <Content>
            <Title>Kartierung</Title>
            <iframe src="https://loerrach.nextgis.com/resource/116/display/tiny?base=osm-mapnik&amp;lon=8.5979&amp;lat=48.7622&amp;angle=0&amp;zoom=9&amp;styles=115&amp;linkMainMap=true&amp;events=false" frameborder="0" style={{overflow:"hidden",width:"100%", height:"400px", display:"block"}}></iframe>
        </Content>
    </Wrapper>
);