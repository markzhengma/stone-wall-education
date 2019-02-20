import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class ResourcePage extends Component {
    constructor(){
        super();
        this.state = {
            resourceData: null,
            pageCount: 1,
            currentPageContent: null,
            currentPage: 1,
            pageArray: [],
            category: null,
        }
    }

    getAllResources = () => {
        axios.get('/resource/all')
        .then(res => {
            if(res.data && res.data.length >= 1){
                this.setState({
                    pageCount: Math.ceil(res.data.length/10),
                    currentPage: 1,
                    resourceData: res.data,
                    category: "All Resources",
                });
                if(res.data.length <= 10){
                    this.setState({
                        currentPageContent: res.data,
                    })
                }else{
                    this.setState({
                        currentPageContent: res.data.slice(0, 10),
                    })
                };
                var pageArray = [];
                for (var i = 1; i <= Math.ceil(res.data.length/10); i ++){
                    pageArray.push(i);
                    this.setState({
                        pageArray: pageArray,
                    })
                }
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
                    pageCount: Math.ceil(res.data.length/10),
                    currentPage: 1,
                    resourceData: res.data,
                });
                if(res.data.length <= 10){
                    this.setState({
                        currentPageContent: res.data,
                    })
                }else{
                    this.setState({
                        currentPageContent: res.data.slice(0, 10),
                    })
                };
                var pageArray = [];
                for (var i = 1; i <= Math.ceil(res.data.length/10); i ++){
                    pageArray.push(i);
                    this.setState({
                        pageArray: pageArray,
                    })
                }
                switch (category){
                    case 0:
                        this.setState({
                            category: "Other Resources",
                        });
                        break;
                    case 1:
                        this.setState({
                            category: "Gender-Specific Resources",
                        });
                        break;
                    case 2:
                        this.setState({
                            category: "Stonewall-Specific Resources",
                        });
                        break;
                    case 3:
                        this.setState({
                            category: "Archives",
                        });
                        break;
                    case 4:
                        this.setState({
                            category: "Zines",
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

    handlePageChange = (pageNum) => {
        if(pageNum >= 1 && pageNum <= this.state.pageCount){
            this.setState({
                currentPage: pageNum
            })
            if((this.state.resourceData.length - 1) - (pageNum - 1) * 10 >= 9){
                this.setState({
                    currentPageContent: this.state.resourceData.slice(((pageNum - 1) * 10), ((pageNum - 1) * 10 + 10))
                })
            }else{
                this.setState({
                    currentPageContent: this.state.resourceData.slice(((pageNum - 1) * 10), (this.state.resourceData.length))
                })
            }
        }
    }

    render(){
        return (
            <div className = "resource-page">
                <h3>Additional Resources</h3>
                <div className = "button-list">
                    <button onClick = {this.getAllResources}>All Resources</button>
                    <button onClick = {() => this.getResourceByCat(1)}>Gender-Specific</button>
                    <button onClick = {() => this.getResourceByCat(2)}>Stonewall-Specific</button>
                    <button onClick = {() => this.getResourceByCat(3)}>Archives</button>
                    <button onClick = {() => this.getResourceByCat(4)}>Zines</button>
                    <button onClick = {() => this.getResourceByCat(0)}>Other</button>
                </div>
                {this.state.resourceData ? 
                    <nav aria-label="...">
                        <ul className = "pagination">
                            <li 
                                className = {this.state.currentPage === 1 ? "page-item disabled" : "page-item"}
                                onClick = {() => this.handlePageChange(this.state.currentPage - 1)}
                            >
                                <a className = "page-link" href = "#">Previous</a>
                            </li>
                            {this.state.pageArray.map(pageNum => {
                                return(
                                    <li class= {pageNum === this.state.currentPage ? "page-item active" : "page-item"}>
                                        <a className = "page-link" onClick = {() => this.handlePageChange(pageNum)}>
                                            {pageNum}
                                            {pageNum === this.state.currentPage ? <span class="sr-only">(current)</span> : ""} 
                                        </a>
                                    </li>
                                )
                            })}
                            <li 
                                className = {this.state.currentPage === this.state.pageCount ? "page-item disabled" : "page-item"}
                                onClick = {() => this.handlePageChange(this.state.currentPage + 1)}
                            >
                                <a className = "page-link" href = "#">Next</a>
                            </li>
                        </ul>
                    </nav>
                : ""}
                <div className = "resource-renderer">
                    {this.state.category ? 
                        <h4>{this.state.category}</h4>
                    : ""}
                    <div className = "resource-list">
                        {this.state.currentPageContent != null && this.state.currentPageContent.length >= 1 ? 
                            this.state.currentPageContent.map(data => {
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
                {this.state.resourceData ? 
                    <nav aria-label="...">
                        <ul className = "pagination">
                            <li 
                                className = {this.state.currentPage === 1 ? "page-item disabled" : "page-item"}
                                onClick = {() => this.handlePageChange(this.state.currentPage - 1)}
                            >
                                <a className = "page-link" href = "#">Previous</a>
                            </li>
                            {this.state.pageArray.map(pageNum => {
                                return(
                                    <li class="page-item">
                                        <a class="page-link" onClick = {() => this.handlePageChange(pageNum)}>
                                            {pageNum}
                                        </a>
                                    </li>
                                )
                            })}
                            <li 
                                className = {this.state.currentPage === this.state.pageCount ? "page-item disabled" : "page-item"}
                                onClick = {() => this.handlePageChange(this.state.currentPage + 1)}
                            >
                                <a className = "page-link" href = "#">Next</a>
                            </li>
                        </ul>
                    </nav>
                : ""}
            </div>
        )
    }
}

export default ResourcePage;