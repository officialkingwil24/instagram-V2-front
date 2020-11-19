import Logo from '../Logo/Logo';
import './NavBar.css'

function NavBar(){
    return(
        <div className="NavBar">
            <Logo/>
            <div>
                <a className='link' href='/AboutMe'>About Me</a>
                <a className='link' href='/Skills'>Skills</a>
                <a className='link' href='/Education'>Education</a>
                <a className='link' href='/Portfolio'>Portfolio</a>
                <a className='link' href='/Resume'>Resume</a>
                <a className='link' href='/Links'>Links</a>
                <a className='link' href='/Contact'>Contact</a>
            </div>
        </div>
    )
}
export default NavBar;