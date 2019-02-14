import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class ResourcePage extends Component {
    constructor(){
        super();
        this.state = {
            resourceData: null,
            category: null,
        }
    }

    getAllResources = () => {
        axios.get('/resource/all')
        .then(res => {
            if(res.data && res.data.length >= 1){
                this.setState({
                    resourceData: res.data,
                    category: "All Resources",
                });
            }else{
                console.log("not able to retrieve data");
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    getResourceByCat = (category) => {
        axios.get(`/resource/category/${category}`)
        .then(res => {
            if(res.data && res.data.length >= 1){
                this.setState({
                    resourceData: res.data,
                });
                switch (category){
                    case 0:
                        this.setState({
                            category: "Other Resources",
                        });
                        break;
                    case 1:
                        this.setState({
                            category: "Gender Specific",
                        });
                        break;
                    case 2:
                        this.setState({
                            category: "Stonewall Specific",
                        });
                        break;
                    default:
                        this.setState({
                            category: null,
                        })
                }
            }else{
                console.log("not able to retrieve data");
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return (
            <div className = "resource-page">
                <h3>Additional Resources</h3>
                <div className = "button-list">
                    <button onClick = {this.getAllResources}>All Resources</button>
                    <button onClick = {() => this.getResourceByCat(1)}>Gender-Specific</button>
                    <button onClick = {() => this.getResourceByCat(2)}>Stonewall-Specific</button>
                    <button onClick = {() => this.getResourceByCat(0)}>Other</button>
                </div>
                <div className = "resource-renderer">
                    {this.state.category ? 
                        <h4>{this.state.category}</h4>
                    : ""}
                    <div className = "resource-list">
                        {this.state.resourceData != null && this.state.resourceData.length >= 1 ? 
                            this.state.resourceData.map(data => {
                                return (
                                    <div className = "resource-single">
                                        <p>Img Link: {data.img}</p>
                                        <a href = {data.link} target = "_blank"><h5>{data.title}</h5></a>
                                        <p>Intro: {data.intro}</p>
                                    </div>
                                )
                            })
                        : ""}
                    </div>
                </div>
            </div>
        )
    }
}

export default ResourcePage;