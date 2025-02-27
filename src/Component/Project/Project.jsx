import '../Project/Project.css'
import valorant from '/src/assets/Project/Project-1.png'
import weather from '/src/assets/Project/Project-2.png'
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <section className="project" id="project">
        <div className="container">
            <div className="main project-main">
                <div className="title_h2">
                    Featured Projects
                </div>
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
            </div>
        </div>
    </section>
  )
}

export default Project