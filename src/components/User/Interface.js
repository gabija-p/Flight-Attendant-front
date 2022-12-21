import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import AirlinesList from "../Airlines/AirlinesList";
import AirportService from "../../services/AirportService"
import '../../App.css'

export default function AirportsList(){
    const [airports, setAirports] = useState([]);
    const [id, setId] = useState(localStorage.getItem("userId"));
  
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

    const handleSelect = () => {
        navigate('/addairport');
    };

    return (<> 
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>

        <script src="https://kit.fontawesome.com/ca663a10ad.js" crossOrigin="anonymous"></script>
    </head>
        <div className="container-fluid px-0" style={{padding: '0!imporant'}}>
            <div className="row no-gutters" style={{width: '100%'}}>
        <div className="col-3" style={{height: '100%'}}>
        <div className="box" style={{marginTop: '15px', fontFamily:'Roboto', width: '100%', }}>
        <input type="submit" className="btn btn-light" style={{fontFamily:'Roboto', padding:'10px', background:'#c1eef3', color:"#4b7377", fontWeight:"bold", width:"100%"}} value="Pridėti naują oro uostą" 
        onClick={handleSelect}/>
            {airports &&
              airports.map((airport, index) => {
               if(airport.userId == id) {return <>
              <ul className="list-group list-group-horizontal justify-content-center" style={{fontFamily: 'Roboto'}}>
                <li className="list-group-item select" style={{width: '100%'}} type="button" key={index}
                onClick={() => handleSelect(airport.id, airport.name)}>
                {airport.name}</li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '20%', paddingLeft: '6%'}} type="button" key={index}
                onClick={() => handleSelect(airport.id, airport.name)}>
                <FontAwesomeIcon icon={icon({name: 'edit', style: 'solid'})} /></li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '20%', paddingLeft: '6%'}} type="button" key={index}
                onClick={() => handleSelect(airport.id, airport.name)}>
                <FontAwesomeIcon icon={icon({name: 'xmark', style: 'solid',})} /></li></ul></>}
              })}
          
        </div>
        </div>
        <div className="col-9">
        <p style={{fontSize:"25px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold", padding:'50px'}}>Oro uostų sąrašas</p>
        <p style={{fontSize:"17px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold"}}>Pasirinkite oro uostą</p>
        </div>
        </div>
        </div>
    </>);
    };