import '../About/About.css'
import Myphoto from '/src/assets/About/My-photo.jpg'
const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="main about-main">
                <div className="title_h2">
                    About Me
                </div>
                <div className="about-content">
                    <div className="left-content">
                        <h5>I am Harsh Patel, born and raised in Ahmedabad. I come from a nuclear family and have completed my schooling at Asia English School under the CBSE board. I pursued my graduation in Computer Science and Engineering from New LJ Institute of Engineering and Technology.<br/><br/>I have a deep passion for working with data and visualizing insights through graphs, which has led me to develop a strong interest in Machine Learning and Data Science. I am proficient in programming languages such as Python, HTML, CSS, and ReactJS. Currently, I am also working on a startup idea focused on elder care under the organization Saathi Care.<br/><br/>I am always eager to learn new things and delve deeper into subjects that intrigue me. Beyond academics and professional pursuits, I have a keen interest in mythological shows and movies, particularly those based on Indian mythology. Additionally, I enjoy playing cricket and football, which help me stay active and engaged outside of my studies and work.</h5>
                    </div>   
                    <div className="right-content">
                        <img src={Myphoto}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default About