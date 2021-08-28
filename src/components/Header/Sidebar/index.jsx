import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => {
  return (
  <Wrapper active={sidebar}>
    <NavbarLinks clickEvent={() => toggle(!sidebar)}/>
  </Wrapper>
  )
};

export default Sidebar;