import {useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
export default function Header(){
  const [temperature, setTemperature] = useState("0")

    useEffect(()=>{
      loadWeather()
    },[])

    async function fetchWeather() {
      // NOTE: if current API key is not working, replace with your personal free key obtained via https://openweathermap.org/
      const API_KEY = 'cf04de50fe5c627f5b4c66eceacb6acb';
      const loc = { city: 'Kaunas', country: 'LT' };
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc.city},${loc.country}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      return {
        temperature: data.main.temp,
        units: 'C',
        weather_icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };
    }

    function loadWeather() {
      fetchWeather().then((weather) => {
        setTemperature(`${weather.temperature} \u00b0${weather.units}`)
      });
    }

    return (<>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
    <nav className="navbar navbar-expand navbar-dark " style={{ paddingLeft:"10px", backgroundColor:"#c1eef3"}}>
    <a href="./Home" className="navbar-brand" style={{fontSize:"25px", color:"#4b7377", opacity:60, fontFamily:"Roboto", fontWeight:"bold"}}>
      Flight Attendant
    </a>

    <span  style={{fontSize:30, opacity:60, fontFamily:"Roboto", color:"#4b7377", position:'absolute', right:'0', paddingRight:"10px", fontWeight:"bold" }}>
        {/* temperature*/}
      </span>

  </nav></>)
}