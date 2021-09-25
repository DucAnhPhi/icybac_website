import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Container } from './styles';
import { Logo } from '../../index';
import { Link } from "gatsby";

const Navbar = ({report}) => {
    return (
        <Wrapper report={report}>
            <Logo />
            {
                report
                ? <Container report={report}>
                    <Link to="/" className="close">&#10005; Fragebogen schließen</Link>
                </Container>
                : <Container>
                    <NavbarLinks desktop />
                    <Link to="/report" className="button">Stechmücke melden</Link>
                </Container>
            }
        </Wrapper>
    );
};

export default Navbar;