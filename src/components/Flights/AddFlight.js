import React,{useState,useEffect} from "react"
import FlightService from "../../services/FlightService"
import '../../App.css'


export default function AddFlight(){
    const [Destination,setDestination]=useState("");
    const [Date, setDate]=useState();
    const [Hour, setHour]=useState();
    const [Minutes, setMinutes]=useState("");
    const [Gate, setGate]=useState("");
    const [Price, setPrice]=useState("");
    const [Seats, setSeats]=useState("");
    
    function handleFormSubmit(e){
        const data = {
            destination: Destination,
            year: Date.substr(0, 4),
            month: Date[5] + Date[6],
            day: Date.substr(8, 9),
            hour: Hour,
            minutes: Minutes,
            gate: Gate,
            price: Price,
            seats: Seats
      
          }
        e.preventDefault();
        FlightService.create(data)
        .then(response => {
            window.location.href="/userinterface"})
        }
    return (<>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
    <div className="d-flex justify-content-center">
      <div className="box" style={{width: "40%"}}>
        <header className="header pt-2 mb-5 d-flex justify-content-center" style={{fontFamily:'Roboto', fontWeight:"bold", fontSize:"25px", color:"#4b7377", opacity:60}}>Naujas skrydis</header>
        <div className="col-12 my-5 container d-flex justify-content-center">
          <form style={{width: '60%'}}>
            <div className="form-group">
              <label htmlFor="destination" style={{fontFamily:'Roboto', padding:'10px'}}>Kryptis</label>
              <input
                type="text"
                className="form-control"
                value={Destination}
                onChange={e=>setDestination(e.target.value)}
                id="destination"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date" style={{fontFamily:'Roboto', padding:'10px'}}>Data</label>
              <input
                type="date"
                className="form-control"
                value={Date}
                onChange={e=>setDate(e.target.value)}
                id="date"
              />
            </div>
            <div className="form-group">
                <ul className="list-group list-group-flush list-group-horizontal justify-content-center">
              <li style={{listStyleType: 'none',marginRight: '10%'}}><label htmlFor="hour" style={{fontFamily:'Roboto', padding:'10px'}}>Valanda</label>
              <input
                type="number"
                className="form-control"
                value={Hour}
                onChange={e=>setHour(e.target.value)}
                id="hour"
              /></li>
                <li style={{listStyleType: 'none'}}><label htmlFor="minutes" style={{fontFamily:'Roboto', padding:'10px'}}>Minutės</label>
              <input
                type="number"
                className="form-control"
                value={Minutes}
                onChange={e=>setMinutes(e.target.value)}
                id="minutes"
              /></li>
              </ul>
            </div>
            <div className="form-group">
              <label htmlFor="gate" style={{fontFamily:'Roboto', padding:'10px'}}>Vartai</label>
              <input
                type="text"
                className="form-control"
                value={Gate}
                onChange={e=>setGate(e.target.value)}
                id="gate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price" style={{fontFamily:'Roboto', padding:'10px'}}>Bilieto kaina</label>
              <input
                type="number"
                className="form-control"
                value={Price}
                onChange={e=>setPrice(e.target.value)}
                id="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="seats" style={{fontFamily:'Roboto', padding:'10px'}}>Vietų skaičius</label>
              <input
                type="number"
                className="form-control"
                value={Seats}
                onChange={e=>setSeats(e.target.value)}
                id="seats"
              />
            </div>
            <div className="form-footer d-flex justify-content-center">
              <div className="validation-message"></div>
              <input type="submit" className="btn btn-light" style={{fontFamily:'Roboto', padding:'10px', background:'#c1eef3', color:"#4b7377", fontWeight:"bold", width:"50%", marginTop: "10%"}} value="Išsaugoti" onClick={handleFormSubmit}/></div>
          </form>

        </div>

      </div>
  </div></>)
}