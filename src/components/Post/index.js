import React from 'react';

import styled from './post.module.scss';

function Post({ title = 'Title here.' }) {
    return (
        <article className={styled.post}>
            <header className={styled.heading}>
                <h2>{title}</h2>
            </header>
        </article>
    );
}

export default Post;
