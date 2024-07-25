import { StateCreator } from "zustand";
import { AuthState } from "../interfaces/auth.interface";

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: "not-authenticated",
  user: undefined,
  token: undefined,
});
