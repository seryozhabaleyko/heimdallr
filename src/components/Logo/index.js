import React from 'react';

import styled from './logo.module.scss';

function logo() {
    return (
        <a className={styled.logo} href="/">
            Heimdallr
        </a>
    );
}

export default React.memo(logo);
