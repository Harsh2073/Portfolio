import '../Project/Project.css'
import valorant from '/src/assets/Project/Valorant.png'
import weather from '/src/assets/Project/Weather.png'
import Hommies from '/src/assets/Project/Hommies.jpg'
import Grocery from '/src/assets/Project/Grocery.jpg'
import Hand from '/src/assets/Project/Hand-Gesture.png'
import Purchase from '/src/assets/Project/Purchase-History.png'
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <section className="project" id="project">
        <div className="container">
            <div className="main project-main">                                                                                         
                <div className='project-top'>
                    <div className="title_h2">
                    Featured Projects
                    </div>
                    {/*Top Project-1*/}
                    <div className="project-block">
                        <div className="project-image">
                            <img src={valorant}/>
                        </div>
                        <div className="project-content">
                            <div className="project-heading">
                                <h3>Valorant</h3>
                                <h5>It is a basic information based website for a fps multiplayer game VALORANT.This site holds every information of the game likes what all weapons ar used, which maps are present and what all agents are provided.It is a static website build with the help if HTML and CSS.</h5>
                            </div>
                            <div className="project-links">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>    
                                </ul>
                                <ul className="icons">    
                                    <li>
                                        <a href="https://github.com/Harsh2073/Valorant.git">
                                            <FaGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Top Project-2*/}
                    <div className="project-block">
                        <div className="project-image">
                            <img src={weather}/>
                        </div>
                        <div className="project-content">
                            <div className="project-heading">
                                <h3>Weather Forecast</h3>
                                <h5>Its a Weather Forecast Application,build with Django,HTML,CSS. It provides current temperature of your searched location.I have used Weather API and Google Search API, weather API helps in fetching temperature and Google Search API helps in searching for the city or placed uses enters.</h5>
                            </div>
                            <div className="project-links">
                                <ul>
                                    <li>Django</li>
                                    <li>HTML</li>
                                    <li>CSS</li>    
                                </ul>
                                <ul className="icons">    
                                    <li>
                                        <a href="https://github.com/Harsh2073/Weather.git">
                                            <FaGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Top Project-3*/}
                    <div className="project-block">
                        <div className="project-image">
                            <img src={Hand}/>
                        </div>
                        <div className="project-content">
                            <div className="project-heading">
                                <h3>Hand-Gesture Recognition Model</h3>
                                <h5>It is a Machine Learning model, developed to identify and classify different hand gestures from videos and photos, enabaling intuitive human-computer interaction and gesture-based control systems.</h5>
                            </div>
                            <div className="project-links">
                                <ul>
                                    <li>Python</li>
                                    <li>Machine Learning</li>    
                                </ul>
                                <ul className="icons">    
                                    <li>
                                        <a href="https://github.com/Harsh2073/Hand-Gesture.git">
                                            <FaGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-bottom">
                    <h2>Other Projects</h2>
                    <div className='other-project'>
                        {/*Bottom Project-1*/}
                        <div className='project-bottom-block'>
                            <div className="bottom-block-image">
                                <img src={Hommies}/>
                            </div>
                            <div className="bottom-block-content">
                                <div className="bottom-block-heading">
                                    <h3>Hommies</h3>
                                    <h5>Real Estate Application is a modern, user-friendly platform designed to help buyers, sellers, and agents manage property listings efficiently.</h5>
                                </div>
                                <div className="bottom-block-links">
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>JavaScript</li>
                                        <li>HTML</li>
                                        <li>TailwindCSS</li>
                                    </ul>
                                    <ul className="icons">    
                                        <li>
                                            <a href="https://github.com/Harsh2073/Hommies.git">
                                                <FaGithub />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Bottom Project-2*/}
                        <div className='project-bottom-block'>
                            <div className="bottom-block-image">
                                <img src={Grocery}/>
                            </div>
                            <div className="bottom-block-content">
                                <div className="bottom-block-heading">
                                    <h3>Grocery</h3>
                                    <h5>Grocery Application is a feature-rich, user-friendly platform designed to make grocery shopping seamless and convenient.</h5>
                                </div>
                                <div className="bottom-block-links">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                    <ul className="icons">    
                                        <li>
                                            <a href="https://github.com/Harsh2073/Grocery.git">
                                                <FaGithub />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Bottom Project-3*/}
                        <div className='project-bottom-block'>
                            <div className="bottom-block-image">
                                <img src={Purchase}/>
                            </div>
                            <div className="bottom-block-content">
                                <div className="bottom-block-heading">
                                    <h3>Purchase History</h3>
                                    <h5>Its a Machine Learning model, developed to group or to make a cluster of customers based of their purchasing history, K-Mean Clusting algorithm is used to dvelop this model.</h5>
                                </div>
                                <div className="bottom-block-links">
                                    <ul>
                                        <li>Python</li>
                                        <li>Machine Learning</li>
                                    </ul>
                                    <ul className="icons">    
                                        <li>
                                            <a href="https://github.com/Harsh2073/Purchase-History.git">
                                                <FaGithub />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project