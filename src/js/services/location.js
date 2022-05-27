import Axios from "../plugins/axios";

export async function getCountries() {
   try {
      const response = await Axios.get(
      `/location/get-countries` 
      );
      console.log(response);
      return response;
   } catch(err) {
      console.log(err);
      return Promise.reject(err);
   }
}

export async function getCities(country_index) {
   try {
      const response = await Axios.get(
      `/location/get-cities/${ country_index }` 
      );
      console.log(response);
      return response;
   } catch(err) {
      console.log(err);
      return Promise.reject(err);
   }
}