import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Projects'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'
import Projects from './components/Projects'

export default function App() {
  return (
    <div>
      <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      <SocialLinks />
    </div>
  )
}
