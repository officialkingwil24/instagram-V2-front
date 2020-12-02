import React, {Component} from 'react';

class Intro extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '_______'
        }
    }

    handleInputChange = (e) => {
        console.log(e.target);
        let value = e.taget.value;
        this.setState({futureName: value})
    }

    updateUser = () => {
        this.setState({user: this.state.futureName})
    }

    render(){
        return(
            <header className="App-header">
                <p>Welcome, I'm a Fullstack Developer,</p>
                <p>My Name is {this.state.user}!</p>
                <input id='name' onChange={this.handleInputChange}/>
                <button id='changeName' onClick={this.updateUser}>Change Name</button>
            </header>
        )
    }
}
export default Intro;