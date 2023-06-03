import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";

function App() {
  const [ name, setName ] = useState("");
  const [ email, setEmail] = useState('');
  const [ message, setMessage] = useState('');
  const [contact, setContact] = useState([])

  function submit(e){
    e.preventDefault()
    const contactName = name.json()

    const contactEmail = email.json()

    const contactMessage = message.json()

    const input = [contactName, contactEmail, contactMessage]
    setContact(input)
    console.log(contact)
  }
  

  return (
    <BrowserRouter>
      <div className="App">
        
        <Header/>
          <div>
            <Routes>
              <Route path="/" element= {<About />} />
              {/* <Route path="/Portfolio" element= {<Portfolio/>} />
              <Route path="/Resume" element= {<Resume/>} /> */}
              <Route path="/Contact" name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} submit={submit} element= {<Contact/>} />
            </Routes>
          </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
