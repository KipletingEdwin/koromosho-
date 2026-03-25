import About from "./components/About/About"
import Events from "./components/Events/Events"
import Faith from "./components/Faith/Faith"
import Footer from "./components/Footer/Footer"
import { Home } from "./components/Home/Home"
import Ministries from "./components/Ministries/Ministries"
import Navbar from "./components/Navbar/Navbar"
import Sermons from "./components/Sermons/Sermons"
import Service from "./components/Service/Service"
import Welcome from "./components/WElcome/Welcome"

function App() {

  return (
    <>

    <Navbar />
    <Home />
    <Service />
    <About />
    <Events />
    <Ministries />
    <Sermons />
    <Faith />
    <Welcome />
    <Footer />
    
    </>
  )
}

export default App
