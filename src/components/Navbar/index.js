import React from 'react';
import classNames from 'classnames';

import Logo from '../Logo';
import Nav from '../Nav';

import styled from './navbar.module.scss';

function Navbar() {
    return (
        <nav className={styled.navbar}>
            <div className={classNames('container', styled.grid)}>
                <Logo />
                <Nav />
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
