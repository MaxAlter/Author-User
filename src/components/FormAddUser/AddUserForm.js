import React, { Component } from 'react';
import { connect } from 'react-redux';
//
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import css from './AddUserForm.module.css';
//
import * as userOperations from '../../Redux/Operation/userOperations';

class AddUserForm extends Component {
  state = {
    name: '',
    surname: '',
    desc: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', surname: '', desc: '' });
  };

  render() {
    const { name, surname, desc } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={css.form_container}>
          <div className={css.name_TextField}>
            <TextField
              className={css.name_item}
              onChange={this.handleChange}
              value={name}
              size="small"
              label="name"
              variant="outlined"
              color="primary"
              type="text"
              name="name"
              autoComplete="off"
            />
          </div>
          <div className={css.surname_TextField}>
            <TextField
              className={css.surname_item}
              onChange={this.handleChange}
              value={surname}
              size="small"
              label="surname"
              variant="outlined"
              color="primary"
              type="text"
              name="surname"
              autoComplete="off"
            />
          </div>
          <div className={css.desc_TextField}>
            <TextField
              className={css.desc_item}
              onChange={this.handleChange}
              value={desc}
              size="small"
              label="desc"
              variant="outlined"
              color="primary"
              type="text"
              name="desc"
              autoComplete="off"
            />
          </div>
          <div className={css.save_button}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              type="submit"
            >
              ADD USER
            </Button>
          </div>
        </form>
      </>
    );
  }
}

const MDTP = {
  onSubmit: userOperations.addNewUser,
};

export default connect(null, MDTP)(AddUserForm);
