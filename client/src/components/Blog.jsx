import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faClock, faFolder } from '@fortawesome/free-solid-svg-icons';

import img from '../assets/library.jpg';

const Meta = ({ meta }) => {

  const formatDate = () => {
    let date = new Date(meta.published);
    let formatedDate = date.toLocaleDateString('En', { year: 'numeric', month: 'short', day: 'numeric' });

    return formatedDate;
  };

  const margin = { marginRight: '4px' };

  return (
    <ul className="blog-meta">
      <li className="meta-item">
        <FontAwesomeIcon icon={faClock} style={margin}/>
        {formatDate()}
      </li>
      <li className="meta-item">
        <FontAwesomeIcon icon={faFolder} style={margin}/>
        {meta.tags}
      </li>
      <li className="meta-item">
        <FontAwesomeIcon icon={faCoffee} style={margin}/>
        {`${meta.readingTime} min(s) read`}
      </li>
      {/* October 4, 2020 International 2 min(s) read */}
    </ul>
  );
};

const Blog = ({ blog }) => {
  return (
    // <article className="blog col-lg-6 col-md-4 col-sm-6 col-xs-12 mr-auto">
    <article className="blog col-lg-5 col-md-5 col-sm-5 col-xs-10 mx-auto">
      <img src={img} alt={blog.title} />
      <div className="content">
        <h4 className="blog-title">{blog.title}</h4>
        <Meta meta={blog.meta} />
        <p>{blog.content.slice(0, 150)}</p>
        <a href="/">continue reading</a>
      </div>
    </article>
  );
};

export default Blog;
