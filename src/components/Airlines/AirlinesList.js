import React,{useState,useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import AirlineService from "../../services/AirlineService"
import '../../App.css'

export default function AirlinesList(){
    const location = useLocation();
    let airportId = location.state.airportid;
    let airport = location.state.airport;
    const [airlines, setAirlines] = useState([]);
  
    useEffect(() => {
      retrieveAirlines();
    }, []);
    
    const retrieveAirlines = () => {
        fetch(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${airportId}/airlines`)
        .then(response => response.json())   
        .then((data) => {
            console.log(data);
            setAirlines(data);
         })
        
        .catch(e => {
          console.log(e);
        });
      };

      const navigate = useNavigate();

      const handleSelect = (id, name) => {
        navigate('/flights', {
            state: {
              airlineid: id,
              airline: name,
              airportid: airportId, 
              airportName: airport,
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
        
        <p style={{fontSize:"25px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold", padding:'50px', paddingBottom: 0}}>{airport}</p>
        <p style={{fontSize:"23px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold"}}>oro linijų sąrašas</p>
        <p style={{fontSize:"17px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold"}}>Pasirinkite oro liniją</p>
        <div className="box" style={{marginTop: '15px', fontFamily:'Roboto'}}>
          <ul className="list-group list-group-horizontal justify-content-center" style={{fontWeight:"bold"}}>
            <li className="list-group-item" style={{width: '40%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Pavadinimas</li>
          </ul>
          
            {airlines &&
              airlines.map((airline, index) => (<>
              <ul className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item select" style={{width: '40%'}} type="button" key={index}
                onClick={() => handleSelect(airline.id, airline.name)}>
                {airline.name}</li></ul></>
              ))}
          
        </div>
    </>);
    };