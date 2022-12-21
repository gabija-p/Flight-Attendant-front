import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AirlinesList from "../Airlines/AirlinesList";
import AirportService from "../../services/AirportService"
import '../../App.css'

export default function AirportsList(){
    const [airports, setAirports] = useState([]);
  
    useEffect(() => {
      retrieveAirports();
    }, []);
    
    const retrieveAirports = () => {
        fetch('https://stingray-app-7vbzf.ondigitalocean.app/api/airports')
        .then(response => response.json())   
        .then((data) => {
            console.log(data);
            setAirports(data);
         })
        
        .catch(e => {
          console.log(e);
        });
      };
  
    const navigate = useNavigate();

    const handleSelect = (id, name) => {
        navigate('/airlines', {
            state: {
              airportid: id,
              airport: name,
            },
          });
    };

    return (<> 
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
        
        <p style={{fontSize:"25px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold", padding:'50px'}}>Oro uostų sąrašas</p>
        <p style={{fontSize:"17px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold"}}>Pasirinkite oro uostą</p>
        <div className="box justify-content-center" style={{marginTop: '15px', fontFamily:'Roboto'}}>
          <ul className="list-group list-group-horizontal justify-content-center" style={{fontWeight:"bold"}}>
            <li className="list-group-item" style={{width: '20%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Vietovė</li>
            <li className="list-group-item" style={{width: '40%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Pavadinimas</li>
          </ul>
          
            {airports &&
              airports.map((airport, index) => (<>
              <ul className="list-group list-group-horizontal justify-content-center" style={{fontFamily: 'Roboto'}}>
                <li className="list-group-item" style={{width: '20%'}}>{airport.location}</li>
                <li className="list-group-item select" style={{width: '40%'}} type="button" key={index}
                onClick={() => handleSelect(airport.id, airport.name)}>
                {airport.name}</li></ul></>
              ))}
          
        </div>
    </>);
    };