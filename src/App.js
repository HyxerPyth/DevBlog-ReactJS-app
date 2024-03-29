import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./components/Header/NavBar/About/About"
import Contact from "./components/Header/NavBar/Contact/Contact"
import SelectOption from "./pages/SelectOption/SelectOption";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar/NavBar";
import ExistingBlogs from "./pages/ExistingBlogs/ExistingBlogs";
import NewBlog from "./pages/NewBlog/NewBlog";
import PostsContainer from "./components/Posts/PostsContainer";



const App = (props) => {

  return (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <NavBar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/" element={<Home store={props.store} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/selectoption" element={<SelectOption store={props.store} />} />
              <Route path="/existingblogs" element={<ExistingBlogs store={props.store} />} />
              <Route path="/newblog" element={<NewBlog />} />
              <Route path="/blog/:id" element={<PostsContainer store={props.store}/>} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
