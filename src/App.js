import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Projects'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'
import Projects from './components/Projects'

export default function App() {
  console.log('123123')
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  )
}
