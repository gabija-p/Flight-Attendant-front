import axios from 'axios';

const login = (data) => {

  const loginPayload = {
    username: data.username,
    password: data.password
  }

  return axios.post('https://stingray-app-7vbzf.ondigitalocean.app/api/login', loginPayload)
  
};

const register = (data) => {

  return axios.post('https://stingray-app-7vbzf.ondigitalocean.app/api/register', data)
  
};

const UserService = {
  login,
  register
};

export default UserService;