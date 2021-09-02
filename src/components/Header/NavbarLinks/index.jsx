import React from 'react';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop, clickEvent }) => {
  return (
    <Wrapper desktop={desktop} onClick={clickEvent}>
        <li className="mainpoint">
          <a className="link" href="#bekämpfung">Bekämpfung</a>
          <div className="submenu">
            <a href="#methode">Methode</a>
            <a href="#vorgehen">Vorgehen</a>
            <a href="#bti">BTI</a>
            <a href="#selbsthilfe">Selbsthilfe</a>
          </div>
        </li>
        <li className="mainpoint">
          <a className="link" href="#überuns">Über uns</a>
          <div className="submenu">
            <a href="#ziele">Ziele</a>
            <a href="#experten">Experten</a>
            <a href="#partner">Partner</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </li>
        <li className="mainpoint">
          <a className="link" href="#tigermoskito">Tigermoskito</a>
          <div className="submenu">
            <a href="#biologie">Biologie</a>
            <a href="#brutstätten">Brutstätten</a>
            <a href="#erkennungsmerkmale">Erkennungsmerkmale</a>
            <a href="#risiko">Risiko</a>
            <a href="#verbreitung">Verbreitung</a>
            <a href="#publikationen">Publikationen</a>
          </div>
        </li>
    </Wrapper>
  )

};

export default NavbarLinks;