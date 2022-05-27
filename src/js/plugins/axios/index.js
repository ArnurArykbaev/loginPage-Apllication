import Axios from "axios";
import API_ENV from "../../config/api.config";
import interceptors from './interseptors';

const instance = Axios.create({
  baseURL: API_ENV.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

interceptors(instance);

export default instance;