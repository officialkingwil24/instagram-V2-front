import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className= 'Skills'>
             <h1>Front-End</h1>
                 <hr className='break'/>
                     <ul>
                         <li>React.js</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>API</li>
                        <li>JSX</li>
                        <li>ES6</li>
                    </ul>
                    <h1>Back-End</h1>
                 <hr className='break'/>
                     <ul>
                         <li>Node.js</li>
                        <li>AWS RDS</li>
                        <li>AWS EC2</li>
                        <li>AWS S3</li>
                        <li>PostgreSQL</li>
                        <li>Express.js</li>
                        <li>AWS Cloudfront</li>
                        <li>AWS IAM</li>
                    </ul>
                    <h1>Tools</h1>
                 <hr className='break'/>
                     <ul>
                         <li>Git</li>
                        <li>GitHub</li>
                        <li>Microsoft Office</li>
                        <li>Microsoft Teams</li>
                        <li>Visual Studio Code</li>
                    </ul>
                    <h1>Soft Skills</h1>
                 <hr className='break'/>
                     <ul>
                         <li>Teamwork</li>
                        <li>Collaboration</li>
                        <li>Time Management</li>
                        <li>Customer Service</li>
                        <li>Communication Skills</li>
                    </ul>
            </div>
        )
    }
}
export default Skills;