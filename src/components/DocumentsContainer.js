import React, {Component} from 'react';

export default class DocumentsContainer extends Component{
    render() {
        return(
            <div className='documents'>
                {this.props.motd}
            </div>
        );
    }
}