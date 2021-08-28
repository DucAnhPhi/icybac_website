import React from 'react';
import { Link } from 'gatsby';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Image, Logo, Button, Container } from './styles';
import logo from "../../../images/logo.png";

const Navbar = () => {
    return (
        <Wrapper>
            <Logo>
                <Image src={logo} alt="logo"/>
                <Brand as={Link} to="/">
                    ICYBAC
                </Brand>
            </Logo>
            <Container>
                <NavbarLinks desktop />
                <Button>Stechmücke melden</Button>
            </Container>
        </Wrapper>
    );
};

export default Navbar;