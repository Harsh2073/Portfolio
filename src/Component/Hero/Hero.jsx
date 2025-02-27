import '../Hero/Hero.css';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
            <div className="main hero-main">
                <div className="hero-content">
                    <div className="name">
                        <h1>Hi, I am Harsh Patel</h1>
                    </div>
                    <div className="subtitle">
                        <h3>Machine Learning | Web Developer</h3>
                    </div>
                </div>
                <div className="arrow">
                    <Link to='/About'>
                        <a>
                            <MdKeyboardDoubleArrowDown />
                        </a>
                    </Link>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero