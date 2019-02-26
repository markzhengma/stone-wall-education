import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className = "app_home">
            <div className = "welcome_section">
                <div className = "home_banner">
                </div>
                <div className = "row">
                    <div className = "col-sm-2"/>
                    <div className = "col-sm-8 home_title">
                        <h1>Stonewall Education Resources</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className = "col-sm-2"/>
                </div>
            </div>
            <div className = "category_section">
                <div className = "category_section_background">
                    <h2 className = "category_section_title">Courses Selection</h2>
                    <div className = "category_list row">
                        <div className = "category_single col-sm-4">
                            <div className = "grade_img"/>
                        </div>
                        <div className = "category_single col-sm-4">
                            <div className = "subject_img"/>
                        </div>
                        <div className = "category_single col-sm-4">
                            <div className = "search_img"/>
                        </div>
                    </div>
                    <div className = "highlight_section">
                        <div className = "hightlight_line"/>
                        <div className = "hightlight_course row">
                          <div className = "col-sm-6">
                              <div className = "course1_img"/>
                          </div>
                          <div className = "col-sm-6">
                            <div className = "course2_img"/>
                          </div>
                        </div>
                      </div>
                  </div>
            </div>
            <div className = "contact_section">
                <h3>Contact Us</h3>
                <p>Contact Form</p>
            </div>
        </div>
    );
  }
}

export default Home;
