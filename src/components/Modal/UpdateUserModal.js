import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import css from './UpdateUserDodal.module.css';

import FormUpdateUserModal from './FormUpdateUserModal';

import { changeUser } from '../../Redux/Operation/userOperations';
import { connect } from 'react-redux';

// setting Modal //
Modal.setAppElement('#root');
// setting Modal //

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UpdateUserModal = ({ madalState, madalToggle, user, changeUser }) => {
  const handleSubmit = updatedUser => {
    madalToggle();
    changeUser(updatedUser);
  };
  return (
    <div>
      <Modal isOpen={madalState} style={customStyles}>
        <div className={css.close_button}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={madalToggle}
          >
            X
          </Button>
        </div>
        <FormUpdateUserModal user={user} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

const MDTP = {
  changeUser,
};

export default connect(null, MDTP)(UpdateUserModal);
