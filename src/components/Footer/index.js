import React from 'react';
import classNames from 'classnames';

import Social from '../Social';

import styled from './footer.module.scss';

function Footer() {
    const classes = classNames('container', styled.wrapper);

    return (
        <footer className={styled.footer}>
            <div className="container">
                <div style={{ height: '200px' }}></div>
            </div>
            <div className={styled.copyright}>
                <div className={classes}>
                    <span>© 2020 Heimdallr, All rights reserved.</span>
                    <Social />
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
