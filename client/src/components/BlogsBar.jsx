import React from 'react';

const BlogsSidebar = ({ latest }) => {
  return (
    <div className="d-none d-lg-block col-lg-3 col-blogs-sidebar">
      <div className="blogs-sidebar">
        <input type="text" placeholder="Search..." />
        <h4 className="box-title">Recent Blogs</h4>
        <ul className="list-group list-group-flush">
          {latest.map(blog => <li key={blog.id} className="list-group-item">{blog.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default BlogsSidebar;