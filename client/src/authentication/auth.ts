import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loggedIn, loginType } from '../slices/logginSlice';
import { StateType } from '../store';

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

export const useLogin = () => {
  const loginState = useSelector<StateType, loginType>(
    (state) => state.persistedReducer.login
  );
  const dispatch = useDispatch();

  const loginPost = useCallback(
    async ({ email, password }: SignUpType) => {
      try {
        console.log('pik');

        const response = await axios.post(API_URL + 'login', {
          email,
          password,
        });
        dispatch(loggedIn(response.data.User));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  // return axios
  //   .post(API_URL + 'login', {
  //     email,
  //     password,
  //   })
  //   .then((response) => {
  //     return response.data;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
  return { loginPost };
};
