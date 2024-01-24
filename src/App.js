import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Header/NavBar/Home/Home"
import About from "./components/Header/NavBar/About/About"
import Contact from "./components/Header/NavBar/Contact/Contact"
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar/NavBar";
import Content from "./components/Content/Content";



function App() {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Content />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
