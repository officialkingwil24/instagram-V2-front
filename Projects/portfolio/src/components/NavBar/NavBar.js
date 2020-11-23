import Logo from '../Logo/Logo';
import './NavBar.css'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function NavBar(){
    return(
        <div className="NavBar">
            <Logo/>
            <div>
                <Link className='link' to='AboutMe' smooth={true}>About Me</Link>
                <Link className='link' to='Skills' smooth={true}>Skills</Link>
                <Link className='link' to='Education' smooth={true}>Education</Link>
                <Link className='link' to='Portfolio' smooth={true}>Portfolio</Link>
                <Link className='link' to='Resume' smooth={true}>Resume</Link>
                <Link className='link' to='Links' smooth={true}>Links</Link>
                <Link className='link' to='Contact' smooth={true}>Contact</Link>
            </div>
        </div>
    )
}
export default NavBar;