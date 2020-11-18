import React, {Component} from 'react';

class Intro extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '_____'
        }
    }

    handleInputChange = (e) => {
        console.log(e.target.id);
        let value = e.taget.value;
        this.setState({futureName: value})
    }

    updateUser = (e) => {
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