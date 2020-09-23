import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
// 
import css from './FormUserModal.module.css';


class FormUserModal extends Component {
  state = {
    name: this.props.user.name || '',
    surname: this.props.user.surname || '',
    desc: this.props.user.desc || '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: this.props.user.id });
  };

  render() {
    const { user } = this.props;
    const { name, surname, desc } = this.state;

    return (
      <>
        {user && (
          <form className={css.form_container} onSubmit={this.handleSubmit}>
            <div className={css.name_TextField}>
              <TextField
                className={css.name_item}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
            <div className={css.phone_TextField}>
              <TextField
                className={css.phone_item}
                onChange={this.handleInputChange}
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
                SAVE USER
              </Button>
            </div>
          </form>
        )}
      </>
    );
  }
}

export default FormUserModal;
