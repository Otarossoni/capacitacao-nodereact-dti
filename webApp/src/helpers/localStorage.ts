import type { token } from '../store/auth/auth.types';
import { KeyEmail, KeyToken } from './persistance';

// Funções de acesso ao token
export const setLocalToken = (token: token) => {
  if (token) {
    localStorage.setItem(KeyToken, token ?? '');
  }
};

export const getLocalToken = () => {
  return localStorage.getItem(KeyToken);
};

export const removeLocalToken = () => {
  localStorage.removeItem(KeyToken);
};

// Funções de acesso ao email
export const setLocalEmail = (email: string) => {
  localStorage.setItem(KeyEmail, email ?? '');
};

export const getLocalEmail = () => {
  return localStorage.getItem(KeyEmail);
};

export const removeLocalEmail = () => {
  localStorage.removeItem(KeyEmail);
};
