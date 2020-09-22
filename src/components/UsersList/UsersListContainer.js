import { connect } from 'react-redux';
// 
import UsersList from './UsersList';
import { madalUser } from '../../Redux/Reducer/Actions/userActions';
// 
import * as userOperations from '../../Redux/Operation/userOperations';
import * as usersListSelectors from './UsersListSelectors';

const MSTP = state => ({
  users: usersListSelectors.getAllUsers(state),
  madalState: usersListSelectors.getModalState(state),
});

const MDTP = {
  onDeleteUser: userOperations.deleteUser,
  madalToggle: madalUser,
};

export default connect(MSTP, MDTP)(UsersList);
