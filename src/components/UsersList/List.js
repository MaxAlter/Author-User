import React from 'react';
import Button from '@material-ui/core/Button';
import css from './UserList.module.css';

const List = ({ currentUsers, onDeleteUser, handleModalOpen }) => {
  return (
    <>
      {currentUsers.map(item => (
        <li key={item.id} className={css.user_list}>
          <div className={css.users_avatar}>
            <img
              src="https://kholmsk-arena.ru/wp-content/uploads/d-avatar.png"
              alt="avatar user"
              width="70px"
              height="70px"
            ></img>
          </div>
          <p className={css.user_name}>{item.name}</p>
          <p className={css.user_surname}>{item.surname}</p>
          <p className={css.user_desc}>{item.desc}</p>
          <div className={css.user_button}>
            <Button
              onClick={() => onDeleteUser(item.id)}
              variant="contained"
              color="secondary"
              size="small"
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleModalOpen(item)}
            >
              Update
            </Button>
          </div>
        </li>
      ))}
    </>
  );
};

export default List;
