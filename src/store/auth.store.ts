import { create, StateCreator } from "zustand";
import { AuthState } from "../interfaces/auth.interface";
import { AuthService } from "../auth/auth.service";

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: "not-authenticated",
  user: undefined,
  token: undefined,

  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({
        status: "authenticated",
        user,
        token,
      });
    } catch (error) {
      console.log({ error });
      set({ status: "not-authenticated", user: undefined, token: undefined });
    }
  },
});

export const useAuthStore = create<AuthState>()(storeApi);
