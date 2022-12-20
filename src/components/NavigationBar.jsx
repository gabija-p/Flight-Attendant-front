import { useEffect, useState } from 'react';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import UserNavigationBar from './UserNavigationBar';

const navItemsGuest = [
    {
        display: 'Pagrindinis',
        to: '/home',
        section: 'Home',
    },
    {
        display: 'Skrydžiai',
        to: '/airports',
        section: 'Home',
    }
]

const navItemsUser = [
    {
        display: 'Pagrindinis',
        to: '/home',
        section: 'Home',
    },
    {
        display: 'Skrydžiai',
        to: '/airports',
        section: 'Home',
    },
    {
        display: 'Oro uostas',
        to: '/airports',
        section: 'Home',
    }
]

const navItemsAdmin = []

const NavigationBar = () => {
    const [rerender, setRerender] = useState(false)
    const [user, setUser] = useState("guest");

    let NavigationBarNavItems;
    if(user.type==="admin"){
        NavigationBarNavItems = navItemsAdmin;
    }else if(user.type==="user"){
        NavigationBarNavItems = navItemsUser;
    }else{
        NavigationBarNavItems = navItemsGuest;
    }
    
    useEffect(()=>{
        alert(user);

            
            setUser(window.localStorage.getItem("user"))
        
    },[])

    useEffect(()=>{

            setUser(window.localStorage.getItem("user"))
        
    },[rerender])

    return  <>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">        
        <ul className="navbar-nav mr-auto">             
            {                  
                NavigationBarNavItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                    <Link className="nav-link" to={item.to} style={{fontFamily: "Roboto"}}>
                    {item.display}
                    </Link>
                    </li>
                ))               
            }


                {user==="guest"?
                <>
                <li className="nav-item" style={{position:'absolute', right:0, fontWeight:"bold", fontFamily: "Roboto"}}>
                <Link className="nav-link" to='/login'>
                Prisijungti{user.name}
                </Link></li></>
                :
                <>
                <li className="nav-item" style={{position:'absolute', right:100, fontWeight:"bold", paddingTop:'8px', fontFamily:"Roboto"}}>
                    Prisijungęs: <UserNavigationBar details = {user} />
                </li>
                <li className="nav-item" style={{position:'absolute', right:0, fontWeight:"bold"}}>
                <Link className="btn button" to='/Home' style={{backgroundColor:"#c1eef3", fontFamily:"Roboto"}} onClick={()=>{
                window.localStorage.setItem("user", "guest")
                setRerender(!rerender)
                }}>
                Atsijungti
                </Link></li></>}
        </ul>

    </nav>
            </>;
};

export default NavigationBar;