import React from 'react';
import { Wrapper, Image, Brand } from './styles';
import logo from "../../images/logo.png";
import { Link } from 'gatsby'

export const Logo = () => {
  return (
    <Wrapper>
        <Image src={logo} alt="logo"/>
        <Brand as={Link} to="/">
            ICYBAC
        </Brand>
    </Wrapper>
  )
};