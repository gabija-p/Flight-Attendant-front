import { useEffect, useState } from "react";
import React from "react";

const getAll = (id) => {
  return fetch(`/stingray-app-7vbzf.ondigitalocean.app/api/airports/${id}`, {
                method:"GET"});
};

const AirlineService = {
  getAll
};

export default AirlineService;