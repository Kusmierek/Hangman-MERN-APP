import axios from 'axios';

const API_URL = 'http://localhost:3000/api/authentication/';

export interface SignUpType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerPost = ({ username, email, password }: SignUpType) => {
  return axios
    .post(API_URL + 'register', {
      username,
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const loginPost = ({ email, password }: SignUpType) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
