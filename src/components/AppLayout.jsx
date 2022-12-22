import {Outlet} from "react-router-dom"
import NavigationBar from "./NavigationBar.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

export default function AppLayout(){
    return (<>

    <div>
        <NavigationBar/>
    </div>

    <div >
        <Outlet/>
    </div>    
    </>
    )
}