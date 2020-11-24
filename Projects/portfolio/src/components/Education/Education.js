import React, {Component} from 'react';
import './Education.css'

class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
            filter: 'All Projects'
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({filter: e.target.innerText})
        console.log(this.state)
        console.log(Event.target.innerText)
    }

    render(){
        return(
          <div className="Education" name="Education">
              <h1 className="selectionHead">Education</h1>
              <ul className="filter">
                  <li>React</li>
                  <div></div>
                  <li>HTML</li>
                  <div></div>
                  <li>JavaScript</li>
                  <div></div>
                  <li>Firebase</li>
                  <div></div>
                  <li>FullStack</li>
                  <div></div>
              </ul>
            </div>
        )
    }
}
export default Education;