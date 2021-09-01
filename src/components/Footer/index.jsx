import React from 'react';
import { Outer, Wrapper, Container, Link, Text } from './styles';
import { Logo } from '../index';

export const Footer = () => {
  return (
    <Outer>
        <Wrapper>
            <Container>
                    <div>
                        <Logo />
                        <div class="spacing-top">© 2021 ICYBAC GmbH</div>
                        <Link href="">Datenschutzerklärung</Link>
                    </div>
                    <div class="spacing-top">
                        <h3>Kontakt</h3>
                        <Link href="mailto:icybac@t-online.de">icybac@t-online.de</Link>
                        <Text>+49 6232 622 437</Text>
                    </div>
                    <div class="spacing-top">
                        <h3>Postanschrift</h3>
                        <Text>Georg-Peter-Süß-Str. 1</Text>
                        <Text>67346 Speyer</Text>
                    </div>
            </Container>
            <Container>
                <h3 class="spacing-top-dynamic">Impressum</h3>
                <Text>ICYBAC GmbH</Text>
                        <Text>Handelsregister: Amtsgericht Ludwigshafen/Rhein</Text>
                        <Text>HRB 52601</Text>
                        <Text>USt-IdNr: DE 187772509</Text>
                        <Text>Geschäftsführung: <br/> Dr. Paul Schädler (Regierungspräsident a.d.), <br/>Jochen Gubener (operatives Geschäft),<br/> PD habil. Dr. Norbert Becker (wissenschaftl. Direktor)</Text>
            </Container>
        </Wrapper>
    </Outer>
  )
};