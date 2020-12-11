/* events handlers of routes  -- controllers */
const mongoose = require('mongoose');
const blogsRouter = require('express').Router();
const { readingTime } = require('reading-time-estimator');
const Blog = require('../models/blog');
const logger = require('../utils/logger');

// Routes handlers
// create a new blog
blogsRouter.post('/', (request, response, next) => {
  const blog = request.body;

  // validation and error handling
  if (blog.content === undefined) {
    return response.status(400).json({ error: 'content missing' });
  }

  if (blog.title === undefined) {
    return response.status(400).json({ error: 'title missing' });
  }

  const result = readingTime(blog.content, 40);

  const newBlog = new Blog({
    title: blog.title,
    content: blog.content,
    meta: {
      published: new Date(),
      tags: blog.tags || [],
      readingTime: result.minutes
    },
    imgsrc: blog.imgsrc || ''
  });

  newBlog
    .save()
    .then(savedBlog => { // When the object is saved to the database, the event handler called
      logger.info('blog saved!');
      response.json(savedBlog);
      // mongoose.connection.close();
    })
    .catch(error => next(error));
});

// get all blogs
blogsRouter.get('/', (request, response, next) => {
  Blog.find({})
    .then(blogs => {
      response.json(blogs);
    })
    .catch(error => next(error));
});

// get a blog by id
blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then(blog => {
      if(blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error)); // when called with a parameter, then the execution will continue to the error handler middleware otherwise continue to next route or middleware
});

// get a blogs by tag
blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then(blog => {
      if(blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error)); // when called with a parameter, then the execution will continue to the error handler middleware otherwise continue to next route or middleware
});

// update a blog
blogsRouter.put('/:id', (request, response, next) => {
  const body =request.body;

  const blog = {
    content: body.content
  };

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    // when new is set to true, event handler will be called with new modified dosument instead of the original
    .then(updatedBlog => {
      console.log(updatedBlog);
      response.json(updatedBlog);
    })
    .catch(error => next(error));
});

// delete a blog
blogsRouter.delete('/:id', (request, response, next) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

module.exports = blogsRouter;