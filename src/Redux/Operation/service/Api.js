import axios from 'axios';

const BASE_URL = 'http://77.120.241.80:8911/api';

export const getUsers = () => axios.get(`${BASE_URL}/users`);

export const addUser = newUser => axios.post(`${BASE_URL}/users`, newUser);

export const deletUser = id => axios.delete(`${BASE_URL}/user/${id}`);

export const updateUser = user =>
  axios.put(`${BASE_URL}/user/${user.id}`, user);
