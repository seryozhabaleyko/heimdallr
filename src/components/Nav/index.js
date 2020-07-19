import React from 'react';

import styled from './nav.module.scss';

function Nav() {
    return (
        <ul className={styled.nav}>
            <li className={styled.item}>
                <a className={styled.link} href="#">
                    home 1
                </a>
            </li>
            <li className={styled.item}>
                <a className={styled.link} href="#">
                    home 2
                </a>
            </li>
            <li className={styled.item}>
                <a className={styled.link} href="#">
                    home 3
                </a>
            </li>
        </ul>
    );
}

export default Nav;
