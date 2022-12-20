
import React from "react";
import axios from 'axios';

const login = (data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  "username": data.username,
                            "password": data.password
   })
  };

  const loginPayload = {
    username: data.username,
    password: data.password
  }

  axios.post('https://stingray-app-7vbzf.ondigitalocean.app/api/login', loginPayload)
  .then(response => { return response})
  
};

const register = () => {
  return fetch("/stingray-app-7vbzf.ondigitalocean.app/api/register", {
                method: "POST"});
};

const UserService = {
  login,
  register
};

export default UserService;