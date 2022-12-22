import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import DeleteConfirm from "../DeleteConfirm";
import AirlinesList from "../Airlines/AirlinesList";
import AirportService from "../../services/AirportService"
import AirlineService from "../../services/AirlineService"
import FlightService from "../../services/FlightService"
import '../../App.css'

export default function AirportsList(){
    const [airports, setAirports] = useState([]);
    const [id, setId] = useState(localStorage.getItem("userId"));
    const [deleteMessage, setMessage]=useState("");
    const [airportId, setAirportId]=useState("");
    const [airlineId, setAirlineId]=useState("");
    const [flightid, setFlightId]=useState("");
    const [airportIdSelected, setAirportIdSelected]=useState("");
    const [airport, setAirport]=useState("");
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [displayConfirmationModalAirline, setDisplayConfirmationModalAirline] = useState(false);
    const [displayConfirmationModalFlight, setDisplayConfirmationModalFlight] = useState(false);
    const [selected, setSelection] = useState(true);
    const [selectedAirport, setSelectionAirport]=useState(false)
    const [selectedAirline, setSelectionAirline] = useState(false)
    const [airlineIdSelected, setAirlineIdSelected] = useState(false)
    const [airline, setAirline]=useState("")
    const [airlines, setAirlines] = useState([])
    const [flights, setFlights]=useState([])
  
    useEffect(() => {
      
      retrieveAirports();
      setAirportIdSelected(localStorage.getItem("airportidselected"))
      setSelectionAirport(localStorage.getItem("airlineselection"));
      setAirport(localStorage.getItem("airportname"))
      
    }, []);
    
    useEffect(() => {
      if(selectedAirline || selectedAirport)
      setSelection(false);
    localStorage.setItem("airlineselection", false)
    localStorage.setItem("flightselection", false)
    }, [selectedAirline, selectedAirport]);

    useEffect(() => {
    }, [selectedAirline]);

    useEffect(() => {
      retrieveAirlines();
    }, [airportIdSelected]);
    
    useEffect(() => {
      retrieveFlights();
    }, [airlineIdSelected]);

    const showDeleteModal = (id, name) => {
      setMessage(`Ar tikrai norite ištrinti "${name}" ?`)
      setAirportId(id);
      setDisplayConfirmationModal(true);
      };

      const showDeleteModalAirline = (id, name) => {
        setMessage(`Ar tikrai norite ištrinti "${name}" ?`)
        setAirlineId(id);
        setDisplayConfirmationModalAirline(true);
        };

        const showDeleteModalFlight = (id, destination, year, month, day, hour, minutes) => {
          setMessage(`Ar tikrai norite ištrinti "${destination} ${year}-${month}-${day}  ${hour}:${minutes}" ?`)
          setFlightId(id);
          setDisplayConfirmationModalFlight(true);
          };
      
      // Hide the modal
      const hideConfirmationModal = () => {
      setDisplayConfirmationModal(false);
      setDisplayConfirmationModalAirline(false);
      setDisplayConfirmationModalFlight(false);
      };

      const submitDelete = (id) => {
        AirportService.remove(id)
        .then(response => {
          retrieveAirports();
          setDisplayConfirmationModal(false)}
        );
      };

      const submitDeleteAirline = (id, airlineId) => {
        AirlineService.remove(id, airlineId)
        .then(response => {
          retrieveAirlines();
          setDisplayConfirmationModalAirline(false)}
        );
      };

      const submitDeleteFlight = (id, airlineId, flightId) => {
        FlightService.remove(id, airlineId, flightId)
        .then(response => {
          retrieveFlights();
          setDisplayConfirmationModalFlight(false)}
        );
      };
    
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

      const retrieveAirlines = () => {
        if(localStorage.getItem("airportidselected") != null)
        fetch(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${airportIdSelected}/airlines`)
        .then(response => response.json())   
        .then((data) => {
            console.log(data);
            setAirlines(data);
         })
        
        .catch(e => {
          console.log(e);
        });
      };

      const retrieveFlights = () => {
        fetch(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${airportIdSelected}/airlines/${airlineIdSelected}/flights`)
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

    const handleSelect = () => {
        navigate('/addairport');
    };

    const handleSelectEdit = (airportId, airportName, airportLocation) => {
      localStorage.setItem("airportid", airportId);
      localStorage.setItem("airportname", airportName);
      localStorage.setItem("airportlocation", airportLocation);
      navigate("/editairport");
    };

    const handleSelectEditAirline = (Id, Name, Location) => {
      localStorage.setItem("airlineid", Id);
      localStorage.setItem("airlinename", Name);
      localStorage.setItem("airlinelocation", Location);
      localStorage.setItem("airportidselected", airportIdSelected)
      localStorage.setItem("airportname", airport)
      localStorage.setItem("airlineselection", false)
      localStorage.setItem("flightselection", false)
      setSelectionAirline(false);
      navigate("/editairline");
    };

    const handleEditFlight = (id, destination, year, month, day, hour, minutes, gate, price, seats) => {
      localStorage.setItem("airportidselected", airportIdSelected);
      localStorage.setItem("airlineidselected", airlineIdSelected);
      localStorage.setItem("flightidselected", id);
      localStorage.setItem("destination", destination);
      localStorage.setItem("hour", hour);
      localStorage.setItem("minutes", minutes);
      localStorage.setItem("gate", gate);
      localStorage.setItem("price", price);
      localStorage.setItem("seats", seats);
      const date = year + '-' + month + '-' + day;
      localStorage.setItem("date", date);
      navigate("/editflight");
    };

    const handleAirportSelect = (id, name, location) => {
        setSelection(false);
        setSelectionAirport(true);
        setAirportIdSelected(id);
        setSelectionAirline(false);
        localStorage.setItem("flightselection", false)
        setAirport(name);
    };

    const handleAddAirline = () => {
      localStorage.setItem("airportidselected", airportIdSelected);
      localStorage.setItem("airlineselection", false)
      localStorage.setItem("airportname", airport)
      localStorage.setItem("flightselection", false)
      setSelectionAirline(false);
      window.location.href="/addairline"
    };

    
    const handleAddFlight = () => {
      localStorage.setItem("airportidselected", airportIdSelected);
      localStorage.setItem("airlineidselected", airlineIdSelected);
      localStorage.setItem("flightselection", false)
      window.location.href="/addflight"
    };

    const handleSelectAirline = (id, name) => {
      setSelection(false);
      localStorage.setItem("airlineselection", false)
      setSelectionAirline(true);
      setSelectionAirport(false);
      setAirlineIdSelected(id);
      setAirline(name);
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
                onClick={() => handleAirportSelect(airport.id, airport.name, airport.location)}>
                {airport.name}</li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '20%', paddingLeft: '7%'}} type="button"
                onClick={() => handleSelectEdit(airport.id, airport.name, airport.location)}>
                <FontAwesomeIcon icon={icon({name: 'edit', style: 'solid'})} /></li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '20%', paddingLeft: '7%'}} type="button"
                onClick={() => showDeleteModal(airport.id, airport.name)}>
                <FontAwesomeIcon icon={icon({name: 'xmark', style: 'solid',})} /></li></ul></>}
              })}
          
        </div>
        </div>
        <div className="col-9">
        {selected  && <p className="" style={{fontSize:"17px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold", marginTop: "10%"}}>Pasirinkite oro uostą</p>}
        {selectedAirport && 
          <>
             
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
    <div className="box" style={{marginTop: '15px', fontFamily:'Roboto'}}>
        <p style={{fontSize:"25px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold", padding:'50px', paddingTop: '0px', paddingBottom: 0}}>{airport}</p>
        <p style={{fontSize:"17px", textAlign:'center', fontFamily:'Roboto', color:"#4b7377", fontWeight:"bold"}}>Pasirinkite oro liniją</p>
          <ul className="list-group list-group-horizontal justify-content-center" style={{fontWeight:"bold"}}>
          <input type="submit" className="btn btn-light" style={{fontFamily:'Roboto', padding:'10px', background:'#c1eef3', color:"#4b7377", fontWeight:"bold", width:"50%"}} value="Pridėti naują oro liniją" 
        onClick={handleAddAirline}/>
          </ul>
          
            {airlines &&
              airlines.map((airline, index) => (<>
              <ul className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item select" style={{width: '40%'}} type="button" key={index}
                onClick={() => handleSelectAirline(airline.id, airline.name)}
                >
                {airline.name}</li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '5%', paddingLeft: '2%'}} type="button"
                onClick={() => handleSelectEditAirline(airline.id, airline.name)}>
                <FontAwesomeIcon icon={icon({name: 'edit', style: 'solid'})} /></li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '5%', paddingLeft: '2%'}} type="button"
                onClick={() => showDeleteModalAirline(airline.id, airline.name)}>
                <FontAwesomeIcon icon={icon({name: 'xmark', style: 'solid',})} /></li></ul></>
              ))}
          
        </div>
    </>
          
          }
          {selectedAirline && <> 
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
        <input type="submit" className="btn btn-light" style={{fontFamily:'Roboto', padding:'10px', background:'#c1eef3', color:"#4b7377", fontWeight:"bold", width:"100%"}} value="Pridėti naują skrydį" 
        onClick={handleAddFlight}/>
          <ul className="list-group list-group-horizontal justify-content-left" style={{fontWeight:"bold", width: '100%'}}>
            <li className="list-group-item" style={{width: '30%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Kryptis</li>
            <li className="list-group-item" style={{width: '25%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Laikas</li>
            <li className="list-group-item" style={{width: '20%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Vartai</li>
            <li className="list-group-item" style={{width: '20%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Bilieto kaina</li>
            <li className="list-group-item" style={{width: '20%', color:"#4b7377", backgroundColor: '#c1eef3'}}>Vietų skaičius</li>
            <li className="list-group-item" style={{width: '11.7%', color:"#4b7377", backgroundColor: '#c1eef3'}}></li>
          </ul>
          
            {flights &&
              flights.map((flight, index) => (<>
                <ul className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item" style={{width: '30%'}}key={index}>{flight.destination}</li>
                <li className="list-group-item" style={{width: '25%'}}>{flight.year}.{flight.month}.{flight.day}  {flight.hour}:{flight.minutes}</li>
                <li className="list-group-item" style={{width: '20%'}}>{flight.gate}</li>
                <li className="list-group-item" style={{width: '20%'}}>{flight.price}</li>
                <li className="list-group-item" style={{width: '20%'}}>{flight.seats}</li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '5%', paddingLeft: '2%'}} type="button"
                onClick={() => handleEditFlight(flight.id, flight.destination, flight.year, flight.month, flight.day, flight.hour, flight.minutes, flight.gate, flight.price, flight.seats)}>
                <FontAwesomeIcon icon={icon({name: 'edit', style: 'solid'})} /></li>
                <li className="list-group-item select d-flex align-items-center" style={{width: '5%', paddingLeft: '2%'}} type="button"
                onClick={() => showDeleteModalFlight(flight.id, flight.destination, flight.year, flight.month, flight.day, flight.hour, flight.minutes)}>
                <FontAwesomeIcon icon={icon({name: 'xmark', style: 'solid',})} /></li></ul></>
              ))}
          
        </div>
    </>

          }
        </div>
        </div>
        <DeleteConfirm showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={airportId} message={deleteMessage} />
        <DeleteConfirm showModal={displayConfirmationModalAirline} confirmModal={submitDeleteAirline} hideModal={hideConfirmationModal} id={airportIdSelected} message={deleteMessage} airlineId={airlineId} />
        <DeleteConfirm showModal={displayConfirmationModalFlight} confirmModal={submitDeleteFlight} hideModal={hideConfirmationModal} id={airportIdSelected} message={deleteMessage} airlineId={airlineIdSelected} flightId={flightid}/>
        </div>
    </>);
    };