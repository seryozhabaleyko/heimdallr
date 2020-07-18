import React from 'react';

import Post from '../Post';

import styled from './posts.module.scss';

function Posts({ posts }) {
    if (posts.length === 0) {
        return <p>Постов пока нет!</p>;
    }
    return posts.map((post) => <Post key={post.id} {...post} />);
}

Posts.defaultProps = {
    posts: [],
};

export default Posts;
