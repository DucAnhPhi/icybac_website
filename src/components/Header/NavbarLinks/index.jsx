import React from 'react';
import { Wrapper, Mainpoint, Submenu } from './styles';

const NavbarLinks = ({ desktop, clickEvent }) => {
  return (
    <Wrapper desktop={desktop} onClick={clickEvent}>
        <li class="mainpoint">
          <a class="link" href="#überuns">Über uns</a>
          <div class="submenu">
            <a href="#ziele">Ziele</a>
            <a href="#experten">Experten</a>
            <a href="#partner">Partner</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </li>
        <li class="mainpoint">
          <a class="link" href="#tigermoskito">Tigermoskito</a>
          <div class="submenu">
            <a href="#biologie">Biologie</a>
            <a href="#brutstätten">Brutstätten</a>
            <a href="#erkennungsmerkmale">Erkennungsmerkmale</a>
            <a href="#risiko">Risiko</a>
            <a href="#verbreitung">Verbreitung</a>
            <a href="#publikationen">Publikationen</a>
          </div>
        </li>
        <li class="mainpoint">
          <a class="link" href="#bekämpfung">Bekämpfung</a>
          <div class="submenu">
            <a href="#methode">Methode</a>
            <a href="#bti">BTI</a>
            <a href="#selbsthilfe">Selbsthilfe</a>
          </div>
        </li>
    </Wrapper>
  )

};

export default NavbarLinks;