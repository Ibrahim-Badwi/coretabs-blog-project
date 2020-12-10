import React from "react";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container-lg">
        <div className="row">
          <div className="footer-box col-12 col-md-6 col-lg-4">
            <h4 className="box-title">Coretabs Blog</h4>
            <p className="box-content">
              The goal of this blog is to share and document my learning juerney
            </p>
          </div>
          <div className="debuga footer-box col-12 col-md-6 col-lg-4">
            <h4 className="box-title">Categories</h4>
            <ul className="list-group list-group-flush box-content">
              <li className="list-group-item">React</li>
              <li className="list-group-item">React Native</li>
              <li className="list-group-item">Django</li>
              <li className="list-group-item">Node.js</li>
            </ul>
          </div>
          <div className="debuga footer-box col-12 col-md-6 col-lg-4">
            <h4 className="box-title">Pages</h4>
            <ul className="list-group list-group-flush box-content">
              <li className="list-group-item">Home</li>
              <li className="list-group-item">Categories</li>
              <li className="list-group-item">Contacts</li>
              <li className="list-group-item">About</li>
            </ul>
          </div>
        </div>
        
        <p className="footer-box copy">build by &copy; <a href="https://twitter.com/Ibrahim_Badwi0" target="_blank" rel="noopener noreferrer">Ibrahim Badwi</a></p>
        
      </div>
    </footer>
  );
};

export default Footer;
