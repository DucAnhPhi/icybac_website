import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = ({report}) => {
    const [sidebar, toggle] = useState(false);

    return (
        <Wrapper>
            <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
            <Navbar report={report} />
            {!report && <Hamburger sidebar={sidebar} toggle={toggle} />}
            {!report && <Sidebar sidebar={sidebar} toggle={toggle} />}
        </Wrapper>
    );
};