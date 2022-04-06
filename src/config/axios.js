import axios from "axios";
var env = process.env.REACT_APP_BACKEND_URL;

const axiosClient = axios.create({
  baseURL: env,
});

export default axiosClient;
