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

    default:
      return state;
  }
};
const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_START:
    case ActionType.DELETE_USER_START:
      return null;

    case ActionType.FETCH_USERS_ERROR:
    case ActionType.DELETE_USER_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_START:
    case ActionType.DELETE_USER_START:
    case ActionType.ADD_USER_START:
      return true;

    case ActionType.FETCH_USERS_SUCCESS:
    case ActionType.FETCH_USERS_ERROR:
    case ActionType.DELETE_USER_SUCCESS:
    case ActionType.DELETE_USER_ERROR:
    case ActionType.ADD_USER_SUCCESS:
    case ActionType.ADD_USER_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  users: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
