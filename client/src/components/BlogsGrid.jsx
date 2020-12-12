import React from 'react';

import Blog from './Blog';

const BlogsGrid = ({ blogs }) => {
  return (
    <div className="col-lg-9">
      <div className="row">
        {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogsGrid;