import React, { useState } from 'react';
import { connect, useSelector, shallowEqual } from 'react-redux';

import { createPost } from '../../actions/posts';
import Alert from '../Alert';

import styled from './postForm.module.scss';

function PostForm({ createPost }) {
    const errorMessage = useSelector((state) => state.posts.errorMessage, shallowEqual);
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()) {
            return;
        }

        createPost({ id: String(Date.now()), title: title.trim() });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <Alert message={errorMessage} />}
            <div style={{ margin: '0 0 1rem 0' }}>
                <label htmlFor="title">Заголовок поста</label>
                <input
                    style={{ margin: '1rem 0 0 0' }}
                    className="form-control"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <button className="btn btn-success" type="submit" disabled={!title.trim()}>
                Создать
            </button>
        </form>
    );
}

const mapDispatchToProps = {
    createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
