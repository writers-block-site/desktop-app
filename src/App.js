import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import DocumentsContainer from './components/DocumentsContainer';
import './App.css';

class App extends Component {
    componentWillMount(){

    }
    render() {
        return (
            <div className="App">
                <DocumentsContainer />
            </div>
        );
    }
}

export default App;
