import React,{useState,useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import FlightService from "../../services/FlightService"
import '../../App.css'

export default function FlightsList(){
    const location = useLocation();
    let airportId = location.state.airportid
    let airport = location.state.airportName;
    let airlineId = location.state.airlineid;
    let airline = location.state.airline;
    const [flights, setFlights] = useState([]);
  
    useEffect(() => {
      retrieveFlights();
    }, []);
    
    const retrieveFlights = () => {
        fetch(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${airportId}/airlines/${airlineId}/flights`)
        .then(response => response.json())   
        .then((data) => {
            console.log(data);
            setFlights(data);
         })
        
        .catch(e => {
          console.log(e);
        });
      };

      const navigate = useNavigate();

    return (<> 
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
    <div className="box" style={{marginTop: '15px', fontFamily:'Roboto'}}>
        <p style={{fontSize:"25px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold", padding:'50px', paddingBottom: 0, paddingTop: 0}}>{airport}</p>
        <p style={{fontSize:"23px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold"}}>{airline} oro linijos skrydžiai</p>
          <ul className="list-group list-group-horizontal justify-content-center" style={{fontWeight:"bold"}}>
            <li className="list-group-item" style={{width: '30%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Kryptis</li>
            <li className="list-group-item" style={{width: '25%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Laikas</li>
            <li className="list-group-item" style={{width: '20%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Vartai</li>
            <li className="list-group-item" style={{width: '20%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Bilieto kaina</li>
            <li className="list-group-item" style={{width: '20%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Vietų skaičius</li>
          </ul>
          
            {flights &&
              flights.map((flight, index) => (<>
                <ul className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item" style={{width: '30%'}}key={index}>{flight.destination}</li>
                <li className="list-group-item" style={{width: '25%'}}>{flight.year}.{flight.month}.{flight.day}  {flight.hour}:{flight.minutes}</li>
                <li className="list-group-item" style={{width: '20%'}}>{flight.gate}</li>
                <li className="list-group-item" style={{width: '20%'}}>{flight.price}</li>
                <li className="list-group-item" style={{width: '20%'}}>{flight.seats}</li></ul></>
              ))}
          
        </div>
    </>);
    };