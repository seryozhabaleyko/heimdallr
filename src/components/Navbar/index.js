import React from 'react';

import Logo from '../Logo';

import styled from './navbar.module.scss';

function Navbar() {
    return (
        <nav className={styled.navbar}>
            <div className="container">
                <Logo />
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
