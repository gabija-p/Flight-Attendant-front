import axios from 'axios';

const create = (data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
  const payload = {
    name: data.name
  }

  return axios.post(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${localStorage.getItem("airportidselected")}/airlines`, payload)

};

const update = (data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
  const payload = {
    name: data.name,
  }

  return axios.put(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${localStorage.getItem("airportidselected")}/airlines/${localStorage.getItem("airlineid")}`, payload)
  
};

const remove = (id, airlineId) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`

  return axios.delete(`https://stingray-app-7vbzf.ondigitalocean.app/api/airports/${id}/airlines/${airlineId}`)
  
};

const AirlineService = {
  create,
  update,
  remove
};

export default AirlineService;