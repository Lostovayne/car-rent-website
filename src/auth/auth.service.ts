import { AxiosError } from "axios";
import { authApi } from "../api/auth.api";

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  token?: string;
}

export class AuthService {
  static login = async (email: string, password: string): Promise<User> => {
    try {
      console.log("Me estoy ejecutando pero no hay backend :" + email + " " + password);

      // Todo: Hacer aqui la peticion al backend para los datos del usuario
      const { data } = await authApi.post("/login", {
        email,
        password,
      });

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }

      throw new Error("Error al iniciar sesión");
    }
  };
}
