import { AxiosError } from "axios";
import { authApi } from "../api/auth.api";

export class AuthService {
  static login = async (email: string, password: string): Promise<unknown> => {
    try {
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
