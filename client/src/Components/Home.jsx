import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className = "app_home">
            <div className = "welcome_section">
                <div className = "home_banner">
                    <div className = "logo_img"/>
                </div>
                <div className = "row">
                    <div className = "col-sm-3"/>
                    <div className = "col-sm-6 home_title">
                        <h1>Stonewall Project</h1>
                        <h3>Digital Curriculum</h3>
                    </div>
                    <div className = "col-sm-3"/>
                </div>
            </div>
            <div className = "intro_section">
                <h3>Here to put some introductions about stonewall and this digital curriculum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className = "category_section">
                <div className = "category_section_background">
                    <h3>Find Resources By...</h3>
                    <div className = "category_list row">
                        <div className = "category_single col-sm-4">
                            <div className = "cat_icon"/>
                            <h4>Grade Levels</h4>
                        </div>
                        <div className = "category_single col-sm-4">
                            <div className = "cat_icon"/>
                            <h4>Topics</h4>
                        </div>
                        <div className = "category_single col-sm-4">
                            <div className = "cat_icon"/>
                            <h4>Something Else</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "highlight_section">
                <h3>Here's the highlight course list</h3>
                
            </div>
            <div className = "contact_section">
                <h3>Here's the contact section</h3>
            </div>
        </div>
    );
  }
}

export default Home;