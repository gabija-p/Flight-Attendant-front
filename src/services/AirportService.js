import axios from 'axios';

const create = (data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
  alert(axios.defaults.headers.common["Authorization"])
  const payload = {
    name: data.name,
    location: data.location,
  }

  return axios.post('https://stingray-app-7vbzf.ondigitalocean.app/api/airports', payload)
  
};

const AirportService = {
  create
};

export default AirportService;