import { connect } from 'react-redux';

import UsersList from './UsersList';

import * as userOperations from '../../Redux/Operation/userOperations';
import * as usersListSelectors from './UsersListSelectors';

const MSTP = state => ({
  users: usersListSelectors.getAllUsers(state),
});

const MDTP = {
  onDeleteUser: userOperations.deleteUser,
};

export default connect(MSTP, MDTP)(UsersList);
