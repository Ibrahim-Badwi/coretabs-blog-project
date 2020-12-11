import React from 'react';

const PostsSidebar = ({ latest }) => {
  return (
    <div className="d-none d-lg-block col-lg-3 col-posts-sidebar">
      <div className="posts-sidebar">
        <input type="text" placeholder="Search..." />
        <h4 className="box-title">Recent Posts</h4>
        <ul className="list-group list-group-flush">
          {latest.map(post => <li key={post.id} className="list-group-item">{post.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default PostsSidebar;