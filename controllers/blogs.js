/* handle events of routes  -- controllers */
const blogsRouter = require('express').Router();
const Blog = require('../models/blog');


// Routes handlers
blogsRouter.get('/', (request, response, next) => {
  // blogs are retrieved from the database with the find method of the Blog model
  Blog.find({})
    .then(blogs => {
      response.json(blogs);
    });
});

blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then(blog => {
      response.json(blog);
    })
    .catch(error => next(error));
});


module.exports = blogsRouter;
