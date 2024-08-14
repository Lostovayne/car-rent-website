import axios from "axios";

const authApi  = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  // withCredentials: true // cookies
})


// Todo : Interceptors
// Leer el store de Zustand

export {
  authApi
}