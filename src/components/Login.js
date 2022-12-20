import React,{useState,useEffect} from "react"
import UserService from "../services/UserService"
import jwt_decode from "jwt-decode";
import '../App.css'


export default function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword] = useState("");
    const [user, setUser] = useState("guest");
    const [loggedIn,setLoggedIn] = useState(false);
    const [wrongPassword,setWrongPassword] = useState(false)
    const [invalidEmail,setInvalidEmail] = useState(false)

    useEffect(()=>{
      if(user === "user")
        localStorage.setItem("user", "user")
      if(user === "admin")
        localStorage.setItem("user", "admin")
    },[user])

    const data = {
      username: username,
      password: password
    }
    
    function handleFormSubmit(e){
      e.preventDefault();

      let found=false      
        if(!found){
          UserService.login(data)
          .then(response => {
            //get token from response
})}}
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
      <div className="box">
        <header className="header pt-2 mb-5 d-flex justify-content-center" style={{fontFamily:'Roboto', fontWeight:"bold", fontSize:"25px", color:"#4b7377", opacity:60}}>Prisijungimas</header>
        <div className="col-12 my-5 container d-flex justify-content-center">
          <form >
            <div className="form-group">
              <label htmlFor="username" style={{fontFamily:'Roboto', padding:'10px'}}>Vartotojo vardas</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={e=>setUsername(e.target.value)}
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{fontFamily:'Roboto', padding:'10px'}}>Slaptažodis</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                id="password"
              />
            </div>
            {(wrongPassword || invalidEmail) && 
                  <div className="alert alert-danger">{wrongPassword?"Neteisingas Slaptažodis":"Toks vartotojas neregistruotas"}</div>
                  }
            <div style={{fontFamily:'Roboto', padding:'10px'}}><a href="/register">Kurti naują paskyrą</a> <a className="text-end">Pamiršau slaptažodį</a></div>
            <div className="form-footer d-flex justify-content-center">
              <div className="validation-message"></div>
              <input type="submit" className="btn btn-light" style={{fontFamily:'Roboto', padding:'10px', background:'#c1eef3', color:"#4b7377", fontWeight:"bold"}} value="Prisijungti" onClick={handleFormSubmit}/>
            </div>
          </form>

        </div>

      </div>
  </div></>)
}