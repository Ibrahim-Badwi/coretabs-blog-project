import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import PostsGrid from './PostsGrid';
import PostsBar from './PostsBar';

import postsService from '../services/posts';

const Content = () => {
    const [posts, setPosts] = useState([]);

    const hook = () => {
        postsService
        .getAll()
        .then(intialPosts => {
            setPosts(intialPosts)
        })
    };

    useEffect(hook, []);

    return (
        <div className="container-lg mt-5">
            <Switch>
                <div className="row">
                    <PostsGrid posts={posts} />
                    <PostsBar latest={posts} />
                </div>
            </Switch>
        </div>
    );
}

export default Content;