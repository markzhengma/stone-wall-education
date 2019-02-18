import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <div>
      <div className = "head_bar">
        <div className = "logo_img"/>
        <p className = "logo_text">National Park Service</p>
      </div>
      <div className = "home_front">
        <div className = "introduction">
          <h2>Digital Curriculum</h2>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark text-white">
        <Link className="navbar-brand" to = "/">Stonewall</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Educators
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Grade</a>
                <a className="dropdown-item" href="#">Topic</a>
                <Link className="dropdown-item" to = "/resource">Resources</Link>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="#">Students</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
  }
}


export default Header;
