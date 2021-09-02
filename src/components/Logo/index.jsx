import React from 'react';
import { Wrapper } from './styles';
import { StaticImage } from 'gatsby-plugin-image';

export const Logo = () => {
  return (
    <Wrapper href="">
        <StaticImage
          src="../../images/logo.png"
          alt="logo"
          quality="100"
          width={40}
          height={40}
          layout="fixed"
        />
            &nbsp;&nbsp;&nbsp;ICYBAC
    </Wrapper>
  )
};