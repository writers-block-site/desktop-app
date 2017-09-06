import React, {Component} from 'react';
import FileStack from 'filestack-react';

export default class DocumentsContainer extends Component{
    render() {
        return(
            <div className='documents'>
                {this.props.motd}
                <FileStack
                apikey='Arm3f7HJReOkjrR25yPiwz'
                mode='retrieve'
                handle='l2hkLNwLQOefwSZSsIuj'
                buttonText="Click me" />
            </div>
        );
    }
}