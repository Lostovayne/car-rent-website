import { IUser } from "./user.interface";

export interface AuthState {
  status: status;
  user?: IUser 
  token?: string;
}

export type status = "checking" | "authenticated" | "not-authenticated";
