import React from 'react';
import { Global } from './styles.js'
import './fonts.css';

export const Layout = ({children}) => {
    return(
        <>
            <Global />
            {children}
        </>
    );
};