import '../Header/Header.css'
import {Link} from 'react-router-dom';
const Header = () => {            
  return (
    <>
    <div className='container'>
        <div className='header-main'>
            <div className='logo'>
              <Link to='/'>
                <a>HP</a>
              </Link>
            </div>
            <div className='nav-panel'>
                <Link to='/About'><a>About</a></Link>
                <Link to='/Experience'><a>Experience</a></Link>
                <Link to='/Project'><a>Project</a></Link>
                <Link to='/Footer'><a>Contact</a></Link>
            </div>
            <div className='btn'>
                <a href='#'>Resume</a>
            </div>
            {/*<div className='btn'>
              <a href='/src/assets/Header/My-resume.pdf'>Resume</a>
            </div>*/}
        </div>
    </div>
    </>
  )
}

export default Header