import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Post from '../Post';
import { fetchPosts } from '../../actions/posts';
import { getFetchedPosts } from '../../selectors';
import Spinner from '../Spinner';
import Alert from '../Alert';

import styled from './fetchedPosts.module.scss';

function FetchedPosts() {
    const dispatch = useDispatch();

    const { loading, posts, error } = useSelector((state) => getFetchedPosts(state), shallowEqual);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert message={`${error.name}: ${error.message}`} />;
    }

    if (posts.length === 0) {
        return (
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => dispatch(fetchPosts())}
            >
                Загрузить
            </button>
        );
    }

    return posts.map((post) => <Post key={post.id} {...post} />);
}

export default FetchedPosts;
