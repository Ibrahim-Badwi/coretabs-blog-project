import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import BlogsGrid from './BlogsGrid';
import BlogsBar from './BlogsBar';

import blogsService from '../services/blogs';

const Content = () => {
  const [blogs, setBlogs] = useState([]);

  const hook = () => {
    blogsService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs);
      });
    // blogsService
    //   .getAll()
    //   .then(response => {
    //     setBlogs(response.data);
    //   });
  };

  useEffect(hook, []);
  console.log(blogs);
  return (
    <div className="container-lg mt-5">
      <Switch>
        <div className="row">
          <BlogsGrid blogs={blogs} />
          <BlogsBar latest={blogs} />
        </div>
      </Switch>
    </div>
  );
};

export default Content;