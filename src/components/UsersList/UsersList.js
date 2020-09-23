import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Pagination } from '@material-ui/lab';
//
import css from './UserList.module.css';
import UserModal from '../Modal/UserModal';
import List from './List';

const UsersList = ({ users, onDeleteUser, modalToggle, modalState }) => {
  let [activeUser, setActiveUser] = useState(null);
  let [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;

  const pageCount = Math.ceil(users.length / perPage);
  const firstIdx = (currentPage - 1) * perPage;
  const lastIdx = firstIdx + perPage;

  const currentUsers = users.slice(firstIdx, lastIdx);

  const handleModalOpen = user => {
    modalToggle();
    setActiveUser(user);
  };

  const handlePaginationChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <UserModal
        modalState={modalState}
        modalToggle={modalToggle}
        user={activeUser}
      />
      <Pagination
        count={pageCount}
        shape="rounded"
        onChange={handlePaginationChange}
      />
      <ul className={css.user_container}>
        <List
          currentUsers={currentUsers}
          onDeleteUser={onDeleteUser}
          handleModalOpen={handleModalOpen}
        />
      </ul>
    </>
  );
};

export default UsersList;
