import React,{useState,useEffect} from "react"
import AirlineService from "../../services/AirlineService"
import '../../App.css'


export default function EditAirline(){
    const [Name,setName]=useState(localStorage.getItem("airlinename"));
    const [name,setname]=useState(localStorage.getItem("airlinename"));
    const [Location, setLocation] = useState("");

    const data = {
      name: Name
    }
    
    function handleFormSubmit(e){
      e.preventDefault();
      AirlineService.update(data)
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
        <header className="header pt-2 mb-5 d-flex justify-content-center" style={{fontFamily:'Roboto', fontWeight:"bold", fontSize:"25px", color:"#4b7377", opacity:60}}>Redaguoti "{name}"</header>
        <div className="col-12 my-5 container d-flex justify-content-center">
          <form style={{width: '60%'}}>
            <div className="form-group">
              <label htmlFor="name" style={{fontFamily:'Roboto', padding:'10px'}}>Pavadinimas</label>
              <input
                type="text"
                className="form-control"
                value={Name}
                onChange={e=>setName(e.target.value)}
                id="name"
              />
            </div>
            <div className="form-footer d-flex justify-content-center">
              <div className="validation-message"></div>
              <input type="submit" className="btn btn-light" style={{fontFamily:'Roboto', padding:'10px', background:'#c1eef3', color:"#4b7377", fontWeight:"bold", width:"50%", marginTop: "10%"}} value="Išsaugoti" 
              onClick={handleFormSubmit}/></div>
          </form>

        </div>

      </div>
  </div></>)
}