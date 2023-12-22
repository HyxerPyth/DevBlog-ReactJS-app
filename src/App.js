import React from "react";
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import StartPage from "./components/StartPage/StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/startpage" element={<StartPage />} />
              <Route path="/mainpage" element={<MainPage />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
