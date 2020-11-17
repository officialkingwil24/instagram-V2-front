import React, {Component} from 'react';

class Intro extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: 'Will'
        }
    }

    handleInputChange = (e) => {
        let value = e.target.value;
        this.setState({user: value})
    }

    render(){
        return(
            <header className="App-header">
                <p>Welcome, I'm a Fullstack Developer,</p>
                <p>My Name is {this.state.user}!</p>
                <input onChange={this.handleInputChange}/>
            </header>
        )
    }
}
export default Intro;