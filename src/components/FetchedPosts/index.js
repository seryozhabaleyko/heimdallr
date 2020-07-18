import React from 'react';

import Post from '../Post';

import styled from './fetchedPosts.module.scss';

function FetchedPosts({ posts }) {
    if (posts.length === 0) {
        return (
            <button className="btn btn-primary" type="button">
                Загрузить
            </button>
        );
    }
    return posts.map((post) => <Post key={post.id} {...post} />);
}

FetchedPosts.defaultProps = {
    posts: [],
};

export default FetchedPosts;
