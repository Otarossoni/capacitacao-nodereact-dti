export type token = string | null;

export interface IProfile {
  id: string;
  nome: string;
}

export interface IAuthStates {
  token: token;
  isAuthenticated: boolean;
  profile?: IProfile;
}

export interface IAuthStore extends IAuthStates {
  setToken: (token: token) => void;
  clearStore: () => void;
}
