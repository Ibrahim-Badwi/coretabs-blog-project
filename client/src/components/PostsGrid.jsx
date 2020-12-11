import React from 'react';

import Post from './Post';

const PostsGrid = ({ posts }) => {
  return (
    <div className="col-lg-9">
      <div className="row">
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostsGrid;