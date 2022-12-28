import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../store';
import { loggedIn, loginType } from '../slices/logginSlice';

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
