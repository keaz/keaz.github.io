import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NavBar from './components/NavBar';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <main>
        <NavBar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
