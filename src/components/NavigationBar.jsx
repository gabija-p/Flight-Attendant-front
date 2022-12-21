import { useEffect, useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

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
    },
    {
        display: 'Skrydžiai',
        to: '/airports',
    },
    {
        display: 'Oro uosto administratoriaus sąsaja',
        to: '/userinterface',
    }
]

const navItemsAdmin = [
    {
        display: 'Pagrindinis',
        to: '/home',
    },
    {
        display: 'Skrydžiai',
        to: '/airports',
    },
    {
        display: 'Administratoriaus sąsaja',
        to: '/airports',
    }
]

const NavigationBar = () => {
    const [rerender, setRerender] = useState(false)
    const [user, setUser] = useState(localStorage.getItem("user"));

    let NavigationBarNavItems;

    useEffect(()=>{
        if(user==="admin"){
            NavigationBarNavItems = navItemsAdmin;
        }else if(user==="user"){
            NavigationBarNavItems = navItemsUser;
        }else{
            NavigationBarNavItems = navItemsGuest;
        }
    },[user])

    
    useEffect(()=>{
        if(window.localStorage.getItem("user"))  
            setUser(window.localStorage.getItem("user"))
    },[])

    if(user==="admin"){
        NavigationBarNavItems = navItemsAdmin;
    }else if(user==="user"){
        NavigationBarNavItems = navItemsUser;
    }else{
        NavigationBarNavItems = navItemsGuest;
    }

    useEffect(()=>{
        if(window.localStorage.getItem("user")) 
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
                Prisijungti
                </Link></li></>
                :
                <>
                <li className="nav-item" style={{position:'absolute', right:100, fontWeight:"bold", paddingTop:'8px', fontFamily:"Roboto"}}>
                    Prisijungęs: {user==="admin" ?
                      "Administratorius" : localStorage.getItem("username")
                    
                }
                </li>
                <li className="nav-item" style={{position:'absolute', right:0, fontWeight:"bold"}}>
                <Link className="btn button" to='/Home' style={{backgroundColor:"#c1eef3", fontFamily:"Roboto"}} onClick={()=>{
                window.localStorage.setItem("user", "guest")
                window.localStorage.setItem("username", "")
                setRerender(!rerender)
                }}>
                Atsijungti
                </Link></li></>}
        </ul>

    </nav>
            </>;
};

export default NavigationBar;