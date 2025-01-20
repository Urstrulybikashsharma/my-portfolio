
import NavBar from "./components/NavBar.jsx"
import Home from "./components/Home.jsx"
import SocialLinks from "./components/SocialLinks.jsx"
import About from "./components/About.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Experience from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"
const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  )
}

export default App

