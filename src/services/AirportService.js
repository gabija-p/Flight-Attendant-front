import axios from 'axios';

const create = (data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
  const payload = {
    name: data.name,
    location: data.location,
  }

  return axios.post('https://stingray-app-7vbzf.ondigitalocean.app/api/airports', payload)
  
};

const update = (data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
  const payload = {
    name: data.name,
    location: data.location,
  }

  return axios.put(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${data.id}`, payload)
  
};

const remove = (id) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`

  return axios.delete(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${id}`)
  
};

const AirportService = {
  create,
  update,
  remove
};

export default AirportService;