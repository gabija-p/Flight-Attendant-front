import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (<>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        </style>
    </head>
    <footer
      className="container-fluid text-light py-3 ps-0 fixed-bottom"
      style={{
        height: 50,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2c2c2c',
        boxShadow: '0px -20px 40px rgba(0, 0, 0, 0.35)',
        marginTop: 'auto'
      }}
    >
      <span style={{fontFamily:"Roboto"}}>KTU, 2022</span>
    </footer></>
  );
}