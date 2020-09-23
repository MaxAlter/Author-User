import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
//
import css from './FormUserModal.module.css';
import FormUserModal from './FormUserModal';
//
import { changeUser } from '../../Redux/Operation/userOperations';
import { connect } from 'react-redux';

// setting default Modal //
Modal.setAppElement('#root');
// setting default Modal //

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: 'auto',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
};

const UserModal = ({ modalState, modalToggle, user, changeUser }) => {
  const handleSubmit = updatedUser => {
    modalToggle();
    changeUser(updatedUser);
  };

  return (
    <div>
      <Modal
        isOpen={modalState}
        style={customStyles}
        onRequestClose={modalToggle}
      >
        <div className={css.close_button}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={modalToggle}
          >
            X
          </Button>
        </div>
        <FormUserModal user={user} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

const MDTP = {
  changeUser,
};

export default connect(null, MDTP)(UserModal);
