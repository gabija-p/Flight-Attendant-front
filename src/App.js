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
import UserInterface from "./components/User/Interface"
import AddAirport from "./components/Airports/AddAirport"
import EditAirport from "./components/Airports/EditAirport"
import AddAirline from "./components/Airlines/AddAirline"
import EditAirline from "./components/Airlines/EditAirline"
import AddFlight from "./components/Flights/AddFlight"
import Register from "./components/User/Register"
import EditFlight from "./components/Flights/EditFlight"

function App() {
  return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
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
                <Route path="/userinterface" element={<UserInterface/>} />
                <Route path="/addairport" element={<AddAirport/>} />
                <Route path="/editairport" element={<EditAirport/>} />
                <Route path="/addairline" element={<AddAirline/>} />
                <Route path="/editairline" element={<EditAirline/>} />
                <Route path="/addflight" element={<AddFlight/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/editflight" element={<EditFlight/>} />
              </Route>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
