import { User } from "../auth/auth.service";

export interface AuthState {
  status: status;
  user?: User;
  token?: string;
  loginUser: (email: string, password: string) => Promise<void>;
}

export type status = "checking" | "authenticated" | "not-authenticated";
