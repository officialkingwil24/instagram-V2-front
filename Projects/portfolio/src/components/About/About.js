import React, {Component} from 'react';
import './About.css'

class About extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div className= 'About'>
             <h1> I'm Wilson Pierre Louis, a Software enginner based in New York.
                 </h1>
                    <h2>Here are a few I've been working with recently:
                     <ul>
                         <li>JavaScript</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li> React.JS</li>
                        <li>Node.js</li>
                        <li>API</li>
                    </ul> 
                </h2>
            </div>
        )
    }
}
export default About;