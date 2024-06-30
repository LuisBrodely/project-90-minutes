import axios from "axios";

const minutesApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_USERS_SERVICE,
    headers: { 
      'Content-Type': 'application/json'
    },
});


export default minutesApi;