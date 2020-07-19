import React from 'react';
import { connect } from 'react-redux';

import Post from '../Post';
import { getPosts } from '../../selectors';
import Alert from '../Alert';

import styled from './posts.module.scss';

function Posts({ posts }) {
    if (posts.length === 0) {
        return <Alert message="Постов пока нет!" />;
    }
    return posts.map((post) => <Post key={post.id} {...post} />);
}

Posts.defaultProps = {
    posts: [],
};

const mapStateToProps = (state) => ({
    posts: getPosts(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
