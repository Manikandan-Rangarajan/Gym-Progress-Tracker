import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change this if your backend URL is different
});

export default API;
