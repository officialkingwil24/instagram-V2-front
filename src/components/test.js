import React, {Component} from 'react';

class Test extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        return fetch(`http://localhost:3001/users`)
        .then(res => res.json())
        .then(res => this.setState({users: res}))
        .catch(err => console.log(err))
    }

    componentDidUpdate(){
        console.log(this.state.users)
    }

    render(){
       return(
       <h1>{this.state.users? this.state.users[0].username: 'test'}</h1>
        )
    }
}
export default Test;