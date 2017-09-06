import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import DocumentsContainer from './components/DocumentsContainer';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            motd: ''
        }
    }
    componentWillMount(){
        axios.get('http://capstone.dev/api/test').then((results) => {
            this.setState({
                motd: results.data.test
            })
        })
    }
    render() {
        return (
            <div className="App">
                <DocumentsContainer motd={this.state.motd} />
            </div>
        );
    }
}

export default App;
