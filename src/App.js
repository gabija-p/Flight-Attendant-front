import React from "react";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home"
import AppLayout from "./components/AppLayout.jsx"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import AirportsList from "./components/Airports/AirportsList"
import AirlinesList from "./components/Airlines/AirlinesList"
import FlightsList from "./components/Flights/FlightsList"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <Routes>
              <Route path="/" element={<AppLayout/>}>
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/airports" element={<AirportsList/>} />
                <Route path="/airlines" element={<AirlinesList/>} />
                <Route path="/flights" element={<FlightsList/>} />
              </Route>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
