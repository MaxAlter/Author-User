import axios from 'axios';

export const getUsers = () => axios.get('http://77.120.241.80:8911/api/users');

export const addUser = newUser =>
  axios.post('http://77.120.241.80:8911/api/users', newUser);

export const deletUser = id =>
  axios.delete(`http://77.120.241.80:8911/api/user/${id}`);

export const updateUser = user =>
  axios.put(`http://77.120.241.80:8911/api/user/${user.id}`, user);

//   API:

// 1. Получение всех пользователей:
//  GET http://77.120.241.80:8911/api/users

// 2. Создание пользователя:
//   POST http://77.120.241.80:8911/api/users

// 3. Редактирование пользователя:
//   PUT http://77.120.241.80:8911/api/user/19 (19 - это id пользователя, которого редактируют)

// 4. Удаление пользователя:
// 5.  DELETE http://77.120.241.80:8911/api/user/20 (20 - это id пользователя, которого нужно удалить)
