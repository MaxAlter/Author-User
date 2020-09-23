import React, { Component } from 'react';
import { connect } from 'react-redux';
// 
import AddUserForm from './components/FormAddUser/AddUserForm';
import UsersListContainer from './components/UsersList/UsersListContainer';
// 
import * as userOperations from './Redux/Operation/userOperations';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <>
        <AddUserForm />
        <UsersListContainer />
      </>
    );
  }
}

const MDTP = {
  fetchUser: userOperations.fetchUser,
};

export default connect(null, MDTP)(App);
