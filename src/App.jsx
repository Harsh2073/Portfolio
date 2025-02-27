import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Experience from './Component/Experience/Experience'
import Project from './Component/Project/Project'
import Footer from './Component/Footer/Footer'
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hero" element={<Hero/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
    </Router>
    /*
    <>
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Footer/>
    </>*/
  )
}

export default App
