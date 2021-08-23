import React from 'react';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <a href="#about">Über uns</a>
      <a href="#leistungen">Leistungen</a>
      <a href="#produkt">Produkt</a>
      <a href="#arbeitsweise">Arbeitsweise</a>
      <a href="#kontakt">Kontakt</a>
    </Wrapper>
  )

};

export default NavbarLinks;