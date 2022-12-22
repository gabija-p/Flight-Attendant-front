import axios from 'axios';

const create = (data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`

  return axios.post(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${localStorage.getItem("airportidselected")}/airlines/${localStorage.getItem("airlineidselected")}/flights`, data)
  
};

const update = (data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`

  return axios.put(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${localStorage.getItem("airportidselected")}/airlines/${localStorage.getItem("airlineidselected")}/flights/${localStorage.getItem("flightidselected")}`, data)
  
};

const remove = (id, airlineId, flightId) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`

  return axios.delete(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${id}/airlines/${airlineId}/flights/${flightId}`)
  
};

const AirlineService = {
  create,
  update,
  remove
};

export default AirlineService;