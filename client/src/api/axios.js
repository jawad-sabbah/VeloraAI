import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Your Express/Postgres port
});

export default API;