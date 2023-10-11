import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://weatherbotnew.onrender.com/',
  });

export default Instance;