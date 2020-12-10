/* defines schemas to tells mongoose how the blogs objects are to be stored in the database. */
const mongoose = require('mongoose');


// data stored in the database is given a schema at the level of the application
const blogSchema = new mongoose.Schema({
  title: String,
  meta: Array,
  imgSrc: String,
  content: String,
});

// format the objects returned by Mongoose
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Blog', blogSchema, 'blogs');
