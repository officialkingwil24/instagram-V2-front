import React, {Component} from 'react';
import './Resume.css'

class Resume extends Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundImage: 'https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif',
            filter: 'All Projects'
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({filter: e.target.innerText})
        console.log(this.state)
        console.log(Event.target.innerText)
    }

    createCards = () => {
        const allProjects = [
            {
            url: 'https://videosync.co/',
            title: 'VideoSync',
            desc: 'VideoSync can sync your music like bluetooth!',
            tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Firebase', 'FullStack', 'All Projects'],
            img: 'https://toggl.com/blog/wp-content/uploads/2018/08/memorization-techniques.jpg'
            }
        ];
        return( 
            allProjects // all projects to be filtered and put on the website
            .filter((project) => {return project.tech // filter projects based on the tech
            .includes(this.state.filter)}) // specifically look for the tech saved to state
            .map((project, index) => { // now that we have filtered out some projects rendar them to the page
              return( // build the html by using dynamic properties
                <div key={index} className="projectCard" style={{backgroundImage:`url(${project.img || this.state.backgroundImage})`}}>
                    <div className='bar'>{project.title}</div>
                    <div className='projectOverlay'>
                        <img className='projectImage' alt={project.img} src={project.img} />
                        <p className='cardDesc'>{project.desc}</p>
                        <div className='technologies'><ul>{project.tech.map((tech, index) =>{return tech !== 'All Projects' ? <li key={index} value={tech} onClick={this.handleInputChange}>{tech}</li>: ''})}</ul>
                        </div>
                    </div>
                </div>
            )
        })
        )
    }

    render(){
        return(
          <div className="Resume" name="Resume">
              <h1 className="selectionHead">Web Developer Resume</h1>
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
              {this.createCards()}
            </div>
        )
    }
}
export default Resume;