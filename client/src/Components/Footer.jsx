import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className = "app_footer">
          <div className = "row">
              <div className = "col-sm-4">
                  About
              </div>
              <div className = "col-sm-4">
                  Reference
              </div>
              <div className = "col-sm-4">
                  Contact
              </div>
          </div>
      </div>
    );
  }
}

export default Footer;