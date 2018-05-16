import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './formAdd.scss';
import Button from '../../Button/Button';

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
  }

  handleClick() {
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;
    if (title) {
      this.props.onChangeInput({ title, description });
    }
  }

  render() {
    return (
      <div className="form-add">
        <div className="form-add__cell">
          <input
            className="form-add__cell__input"
            ref={this.titleInput}
            placeholder="title"
          />
        </div>
        <div className="form-add__cell">
          <textarea
            className="form-add__cell__textarea"
            rows="5"
            name="text"
            ref={this.descriptionInput}
            placeholder="description"
          />
        </div>
        <div className="form-add__cell">
          <Button
            buttonType="btn_save"
            handleClick={() => this.handleClick()}
            label="Ok"
          />
          <Button
            buttonType="btn_cancel"
            handleClick={this.props.buttonCancelClick}
            label="Cancel"
          />
        </div>
      </div>
    );
  }
}
FormAdd.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  buttonCancelClick: PropTypes.func.isRequired,
};
export default FormAdd;
