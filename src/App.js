import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Thanks from "./pages/Thanks";



function App() {

  

  return (
    <BrowserRouter>
      <div className="App">
        
        <Header/>
          <div>
            <Routes>
              <Route path="/" element= {<About />} />
              <Route path="/Portfolio" element= {<Portfolio/>} />
              <Route path="/Resume" element= {<Resume/>} />
              <Route path="/Contact"  element= {<Contact/>} />
              <Route path="/Thanks"  element= {<Thanks/>} />
            </Routes>
          </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
