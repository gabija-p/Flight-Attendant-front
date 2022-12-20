import { useEffect, useState } from "react";
import React from "react";

const getAll = () => {
  return fetch("/stingray-app-7vbzf.ondigitalocean.app/api/airports", {
                method:"GET"});
};

const AirportService = {
  getAll
};

export default AirportService;