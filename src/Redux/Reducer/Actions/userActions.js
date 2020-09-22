export const ActionType = {
  //
  FETCH_USERS_START: 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
  //
  ADD_USER_START: 'ADD_USER_START',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_ERROR: 'ADD_USER_ERROR',
  //
  DELETE_USER_START: 'DELETE_USER_START',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_ERROR: 'DELETE_USER_ERROR',
  //
  UPDATE_USER_START: 'UPDATE_USER_START',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_ERROR: 'UPDATE_USER_ERROR',

  //
  MODAL_TOOGLE: 'MODAL_TOOGLE',
};

// ALL USERS
export const fetchUsersStart = () => ({
  type: ActionType.FETCH_USERS_START,
});

export const fetchUsersSuccess = users => ({
  type: ActionType.FETCH_USERS_SUCCESS,
  payload: {
    users,
  },
});

export const fetchUSersError = error => ({
  type: ActionType.FETCH_USERS_ERROR,
  payload: {
    error,
  },
});

// add user

export const addUserStart = () => ({
  type: ActionType.ADD_USER_START,
});

export const addUserSuccess = user => ({
  type: ActionType.ADD_USER_SUCCESS,
  payload: {
    user,
  },
});

export const addUserError = error => ({
  type: ActionType.ADD_USER_ERROR,
  payload: {
    error,
  },
});

// delete user

export const deleteUserStart = () => ({
  type: ActionType.DELETE_USER_START,
});

export const deleteUserSuccess = id => ({
  type: ActionType.DELETE_USER_SUCCESS,
  payload: {
    id,
  },
});

export const deleteUserError = error => ({
  type: ActionType.DELETE_USER_ERROR,
  payload: {
    error,
  },
});

// update user

export const updateUserStart = () => ({
  type: ActionType.UPDATE_USER_START,
});

export const updateUserSuccess = user => ({
  type: ActionType.UPDATE_USER_SUCCESS,
  payload: {
    user,
  },
});

export const updateUserError = error => ({
  type: ActionType.UPDATE_USER_ERROR,
  payload: {
    error,
  },
});

// is open modal

export const madalUser = () => ({
  type: ActionType.MODAL_TOOGLE,
});
