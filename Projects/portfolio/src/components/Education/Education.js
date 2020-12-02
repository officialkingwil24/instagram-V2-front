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

    handleInputChange = (event) => {
        this.setState({filter: event.target.innerText})
    }

    createCards = () => {
        const allProjects = [
            {
            url: 'https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif',
            title: 'VideoSync',
            desc: 'VideoSync can sync your music like bluetooth!',
            tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Firebase', 'FullStack', 'All Projects'],
            img: 'https://toggl.com/blog/wp-content/uploads/2018/08/memorization-techniques.jpg'
            },
            {
                url: 'https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif',
                title: 'VideoSync',
                desc: 'VideoSync can sync your music like bluetooth!',
                tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Firebase', 'FullStack', 'All Projects'],
                img: 'https://toggl.com/blog/wp-content/uploads/2018/08/memorization-techniques.jpg'
            },
            {
                url: 'https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif',
                title: 'VideoSync',
                desc: 'VideoSync can sync your music like bluetooth!',
                tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Firebase', 'FullStack', 'All Projects'],
                img: 'https://toggl.com/blog/wp-content/uploads/2018/08/memorization-techniques.jpg'
            }
        ];
        return( 
            allProjects // all projects to be filtered and put on the website
            .map((projects, index) => { // now that we have filtered out some projects rendar them to the page
              return( // build the html by using dynamic properties
                <div
                    key={index}
                    className={!projects.tech.includes(this.state.filter) ? 'projectCard shrink' : 'projectCard grow'}
                    style={{backgroundImage:`url(${projects.img || this.state.backgroundImage})`}}>
                    
                    <a href={projects.url} className='projectsLink'>

                    <div className='bar'>{projects.title}</div>

                        <img className='projectImage' alt={projects.title} src={projects.img} />
                        <p className='cardDesc'>{projects.desc}</p>
                        <div className='technologies'><ul>{projects.tech.map((tech, index) => {
                            return tech !== 'All Projects' ? <li key={index} value={tech} onClick={this.handleInputChange}>{tech}</li>: ''
                            })}</ul>
                    </div>
                    </a>
                </div>
            )
        })
        )
    }

    render(){
        return(
          <div className="Education" name="Education">
              <h1 className="selectionHead">Web Developer Education</h1>
              <ul className="filter">
                  <li onClick={this.handleInputChange}>React</li>
                  <div>|</div>
                  <li onClick={this.handleInputChange}>HTML</li>
                  <div>|</div>
                  <li onClick={this.handleInputChange}>JavaScript</li>
                  <div>|</div>
                  <li onClick={this.handleInputChange}>Firebase</li>
                  <div>|</div>
                  <li onClick={this.handleInputChange}>FullStack</li>
              </ul>
              <h3>Improving On My Abilities</h3>
              <div className="projects">
              {this.createCards()}
            </div>
        </div>
        )
    }
}
export default Education;