import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Button, Container } from './styles';
import { Logo } from '../../index';

const Navbar = () => {
    return (
        <Wrapper>
            <Logo />
            <Container>
                <NavbarLinks desktop />
                <Button>Stechmücke melden</Button>
            </Container>
        </Wrapper>
    );
};

export default Navbar;