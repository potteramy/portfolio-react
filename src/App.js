import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { useEffect, useState } from "react"



function App() {
  const [ currPage, setCurrPage ] = useState("about")
  const [ prefix, setPrefix ] = useState("")

  useEffect(() => {
    if( process.env.NODE_ENV === "production" ){
      setPrefix("/portfolio-react")
    }
  }, [process.env.NODE_ENV])

  useEffect(() => {
    const path = window.location.href.split(window.location.host)[1]
    console.log(path)
    setCurrPage(path)
  }, [window.location.href])
  

  return (
    <div className="App">
    <Header prefix={prefix} />

    { currPage === `${prefix}/` && <About /> }
    { currPage === `${prefix}/portfolio` && <Portfolio /> }
    { currPage === `${prefix}/contact` && <Contact /> }
    { currPage === `${prefix}/resume` && <Resume /> }
    <Footer prefix={prefix} />
  </div>
    // <BrowserRouter>
    //   <div className="App">
        
    //     <Header/>
    //       <div>
    //         <Routes>
    //           <Route path="/" element= {<About />} />
    //           <Route path="/Portfolio" element= {<Portfolio/>} />
    //           <Route path="/Resume" element= {<Resume/>} />
    //           <Route path="/Contact"  element= {<Contact/>} />
    //           <Route path="/Thanks"  element= {<Thanks/>} />
    //         </Routes>
    //       </div>
    //     <Footer/>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
