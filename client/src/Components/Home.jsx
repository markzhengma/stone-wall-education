import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className = "app_home">
          <div className = "row">
            <div className = "col-sm-4"/>
            <div className = "col-sm-4 home_title">
                <h1>Welcome to Stonewall Digital</h1>
            </div>
            <div className = "col-sm-4"/>
          </div>
          <div className = "row">
            <div className = "col-sm-4"/>
            <div className = "col-sm-4 construction_img"/>
            <div className = "col-sm-4"/>
          </div>
      </div>
    );
  }
}

export default Home;