import React, { Component } from 'react';

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {
            disabled: true,
        }
    }

    userClicked = () => this.setState({
        disabled: !disabled
    })

    componentDidMount(){
        console.log('oi');
    }

    componentDidUpdate(){
        console.log('cheguei');
    }

    componentWillUnmount(){
        
    }

    render(){
        return(
            <button disabled={this.state.disabled}>Click</button>   
        )
    }
}