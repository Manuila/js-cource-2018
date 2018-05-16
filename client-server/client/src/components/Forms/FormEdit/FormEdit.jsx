import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import './formEdit.scss';

class FormEdit extends Component {
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
      <tr className="table-posts__row table__row-body">
        <td className="table-posts__cell table-posts__cell-body" />
        <td className="table-posts__cell table-posts__cell-body">
          <input
            ref={this.titleInput}
            defaultValue={this.props.defaultTitleValue}
          />
        </td>
        <td className="table-posts__cell table-posts__cell-body">
          <textarea
            rows="5"
            cols="25"
            name="text"
            ref={this.descriptionInput}
            defaultValue={this.props.defaultDescriptionValue}
          />
        </td>
        <td className="table-posts__cell table-posts__cell-body" />
        <td className="table-posts__cell table-posts__cell-body" />
        <td className="table-posts__cell table-posts__cell-body" />
        <td className="table-posts__cell table-posts__cell-body">
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
        </td>
      </tr>
    );
  }
}
FormEdit.propTypes = {
  defaultTitleValue: PropTypes.string.isRequired,
  defaultDescriptionValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  buttonCancelClick: PropTypes.func.isRequired,
};
export default FormEdit;
