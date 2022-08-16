import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registrarse from "./components/Registrarse";
import Portfolio from "./components/portfolio/Portfolio";
import LogOut from "./components//LogOut";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Registrarse" element={<Registrarse />} />
      <Route path="/Briefcase" element={<Portfolio />} />
      <Route path="/LogOut" element={<LogOut />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
