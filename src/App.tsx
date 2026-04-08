import './App.css'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NavBar from './components/NavBar';
import MediumArticles from './components/MediumArticles';
import RustCrates from "./components/RustCrates";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <AboutMe />
        <Skills />
        <div id='portfolio' className="portfolioStack">
          <RustCrates />
          <Projects />
        </div>
        <MediumArticles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
