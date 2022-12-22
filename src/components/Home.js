import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

export default function Home(){
    return (<>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
    

        <h1 style={{fontFamily:"Roboto", color:"#4b7377", paddingTop: "2%"}}>Populiariausi miestai kelionėms</h1>
        <div className="container">
        <img src={require("../images/dubai2.jpg")} style={{width: "100%", maxHeight: "10%"}}></img>
        <div class="centered" style={{fontFamily: "Roboto", color:"#282c34"}}>Dubajus</div>
        </div>
        <div className="container">
        <img src={require("../images/london.jpg")} style={{width: "100%", maxHeight: "10%"}}></img>
        <div class="centered" style={{fontFamily: "Roboto", color:"#beeeee"}}>Londonas</div>
        </div>
        <div className="container">
        <img src={require("../images/Cancun.jpg")} style={{width: "100%", maxHeight: "10%"}}></img>
        <div class="centered" style={{fontFamily: "Roboto", color:"#337777"}}>Kankunas</div>
        </div>
    </>

    )
}