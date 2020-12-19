/* defines schemas to tells mongoose how the blogs objects are to be stored in the database. */
const mongoose = require('mongoose');


// data stored in the database is given a schema at the level of the application
// schema tells Mongoose how the note objects are to be stored in the database
// validating the format of the data before it is stored in the database
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 15,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  meta: Object,
  imgsrc: String,
});

// format the objects returned by Mongoose
// modify the toJSON method of the schema, which is used on all instances of the models produced with that schema
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Blog', blogSchema, 'blogs');