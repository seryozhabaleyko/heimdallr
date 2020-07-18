import React, { useState } from 'react';

import styled from './postForm.module.scss';

function PostForm() {
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = { id: String(Date.now()), title };

        console.log('new post', newPost);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button className="btn btn-success" type="submit">
                Создать
            </button>
        </form>
    );
}

export default PostForm;
