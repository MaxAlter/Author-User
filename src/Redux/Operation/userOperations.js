import { getUsers, addUser, deletUser, updateUser } from '../Operation/Api';

import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUSersError,
  //
  addUserStart,
  addUserSuccess,
  addUserError,
  //
  deleteUserStart,
  deleteUserSuccess,
  deleteUserError,
  //
  updateUserStart,
  updateUserSuccess,
  updateUserError,
} from '../Reducer/Actions/userActions';

// get all users
export const fetchUser = () => dispatch => {
  dispatch(fetchUsersStart());

  getUsers()
    .then(response => {
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch(error => dispatch(fetchUSersError(error)));
};
// add user
export const addNewUser = newUser => dispatch => {
  dispatch(addUserStart());

  addUser(newUser)
    .then(response => {
      dispatch(addUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(addUserError(error));
    });
};
// delete one user
export const deleteUser = id => dispatch => {
  dispatch(deleteUserStart());

  deletUser(id)
    .then(() => {
      dispatch(deleteUserSuccess(id));
    })
    .catch(error => {
      dispatch(deleteUserError(error));
    });
};
// update user

export const changeUser = user => dispatch => {
  dispatch(updateUserStart());
  updateUser(user)
    .then(response => {
      dispatch(updateUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(updateUserError(error));
    });
};
