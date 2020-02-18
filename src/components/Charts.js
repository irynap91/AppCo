import React from 'react';
import { withRouter } from 'react-router'


import AppcoHeader from './AppcoHeader';
import AppcoFooter  from './AppcoFooter';

export default class Charts extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             historyPage: this.props.page
        }
    }
    
    render () {

    
    return (
        <div>
            <AppcoHeader/>
            {console.log(this.props.page)}
            <AppcoFooter/>
            
        </div>
    )
}
}