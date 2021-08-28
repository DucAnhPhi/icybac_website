import React from 'react';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop, clickEvent }) => {
  return (
    <Wrapper desktop={desktop} onClick={clickEvent}>
      <a href="#überuns">Über uns</a>
      <a href="#biologiedermücke">Biologie der Mücke</a>
      <a href="#selbsthilfe">Selbsthilfe</a>
      <a href="#partner">Partner</a>
      <a href="#kontakt">Kontakt</a>
    </Wrapper>
  )

};

export default NavbarLinks;