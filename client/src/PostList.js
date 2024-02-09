import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Commentcreate from './Commentcreate';
import CommentList from './CommentList';

const App = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = Object.values(posts).map(post => {
        return <div
            className='card'
            style={{ width: '30%', marginBottom: '20px' }}
            key={post.id}
        >
            <div className='card-body'>
                <h3>{post.title}</h3>
                <CommentList comments={post.comments} />
                <Commentcreate postId={post.id} />
            </div>
        </div>
    });

    return <div className='d-flex flex-row flex-row flex-wrap justify-content-between'>
        {renderPosts}
    </div>;
};

export default App;