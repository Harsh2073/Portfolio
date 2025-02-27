import '../Footer/Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className="container">
            <div className="main footer-main">
                <div className="footer-details">
                    <h4>Excited and quick learner,loves to work in team and to learn from different people and to explore myself more.<br/>Feel free to contact me...</h4>
                    <div className="contact-links">
                        <ul>
                            <li>
                                <a href="https://github.com/dashboard">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <FaLinkedin/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h5>Harsh Patel</h5>
            </div>
        </div>
    </>
  )
}

export default Footer