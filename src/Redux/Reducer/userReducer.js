import { combineReducers } from 'redux';
import { ActionType } from './Actions/userActions';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_SUCCESS:
      return payload.users;

    case ActionType.DELETE_USER_SUCCESS:
      return state.filter(item => item.id !== payload.id);

    case ActionType.ADD_USER_SUCCESS:
      return [...state, payload.user];

    case ActionType.UPDATE_USER_SUCCESS:
      return state.map(user => {
        if (user.id === payload.user.id) {
          return payload.user;
        }
        return user;
      });

    default:
      return state;
  }
};
const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_START:
    case ActionType.DELETE_USER_START:
    case ActionType.UPDATE_USER_START:
      return null;

    case ActionType.FETCH_USERS_ERROR:
    case ActionType.DELETE_USER_ERROR:
    case ActionType.UPDATE_USER_ERROR:
      return payload.error;

    default:
      return state;
  }
};
const madalReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.MODAL_TOOGLE:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  users: itemsReducer,
  modal: madalReducer,
  error: errorReducer,
});
