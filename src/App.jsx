import { HomePage, FilmsPage } from "./pages";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/films'>Films</NavLink></li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/films" element={<FilmsPage />} />
  </Routes>
</BrowserRouter>
);
}

export default App;
