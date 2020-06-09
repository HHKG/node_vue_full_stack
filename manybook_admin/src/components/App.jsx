import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from '../routes/index';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: '路由入口文件'
        }
    }
    render() {
        return (
            <Router>
                <div className="app">
                    {}
                </div>
            </Router>
        );
    }
}

export default App;