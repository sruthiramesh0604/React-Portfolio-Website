import "./app.scss"
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar open={menuOpen} setOpen={setMenuOpen}/>  
    <Menu open={menuOpen} setOpen={setMenuOpen}/> 
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
