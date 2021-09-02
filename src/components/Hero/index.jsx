import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper, HeroContent, Title, Button } from './styles';

export const Hero = () => (
    <Wrapper>
        <StaticImage
            src="../../images/mosquito.jpg"
            alt="Tigermoskito"
            quality="100"
            style={{gridArea: "1/1"}}
        />
        <HeroContent>
            <Title>Tigermoskito - <span>Aedes albopictus</span></Title>
            <div>
                <b>ICYBAC GmbH</b> ist Unternehmenstochter der Kommunalen Aktionsgemeinschaft zur Bekämpfung der Schnakenplage (KABS) e.V. <br/>
                <Button href="#überuns">&darr;</Button>
            </div>
        </HeroContent>
    </Wrapper>
);