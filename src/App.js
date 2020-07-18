import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div style={{ height: '50px' }} />
                    <PostForm />
                    <div style={{ height: '50px' }} />
                    <Posts
                        posts={[
                            { id: 1, title: 'Title here. № 1' },
                            { id: 2, title: 'Title here. № 2' },
                        ]}
                    />
                    <div style={{ height: '2px', backgroundColor: '#ccc', margin: '50px 0' }} />
                    <FetchedPosts posts={[]} />
                    <div style={{ height: '50px' }} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
