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
                    <h2>Синхронные посты</h2>
                    <Posts />
                    <div style={{ height: '2px', backgroundColor: '#ccc', margin: '50px 0' }} />
                    <h2>Асинхронные посты</h2>
                    <FetchedPosts posts={[]} />
                    <div style={{ height: '50px' }} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
