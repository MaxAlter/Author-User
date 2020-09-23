import { connect } from 'react-redux';
//
import UsersList from './UsersList';
import { modalUser } from '../../Redux/Reducer/Actions/userActions';
import List from '../UsersList/List';
//
import * as userOperations from '../../Redux/Operation/userOperations';
import * as usersListSelectors from './UsersListSelectors';

const MSTP = state => ({
  users: usersListSelectors.getAllUsers(state),
  modalState: usersListSelectors.getModalState(state),
});

const MDTP = {
  onDeleteUser: userOperations.deleteUser,
  modalToggle: modalUser,
};

export default connect(MSTP, MDTP)(UsersList, List);
