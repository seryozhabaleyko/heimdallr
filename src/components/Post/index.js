import React from 'react';

import styled from './post.module.scss';

function Post({ title }) {
    return (
        <article className={styled.post}>
            <header className={styled.heading}>
                <h2>{title}</h2>
            </header>
        </article>
    );
}

Post.defaultProps = {
    title: 'Title here.',
};

export default Post;
