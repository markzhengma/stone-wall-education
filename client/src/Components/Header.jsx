import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      // Nav Bar
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to = "/">StoneWall</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Educators
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Grade</a>
            <a className="dropdown-item" href="#">Topic</a>
            <Link className="dropdown-item" to = "/resource">Resources</Link>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Students</a>
        </li>
      </ul>
    </div>
  </nav>
    );
  }
}


export default Header;
