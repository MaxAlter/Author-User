import React from 'react';
import Button from '@material-ui/core/Button';
import css from './userList.module.css';

const UsersList = ({ users, onDeleteUser }) => {
  return (
    <>
      <ul className={css.user_container}>
        {users.map(item => (
          <li key={item.id} className={css.user_list}>
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.desc}</p>
            <span>
              <Button
                onClick={() => onDeleteUser(item.id)}
                variant="contained"
                color="secondary"
                size="small"
              >
                Delete user
              </Button>
            </span>
            <span>
              <Button variant="contained" color="primary" size="small">
                Update user
              </Button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
