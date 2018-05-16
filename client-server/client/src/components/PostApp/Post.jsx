import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Forms/FormEdit/FormEdit';
import Button from '../Button/Button';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  toggleChange() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handlePostEdit({ title, description }) {
    this.props.onEdit({ title, description });
    this.toggleChange();
  }

  renderInit() {
    return (
      <tr className="table-posts__row table__row-body">
        <td className="table-posts__cell table-posts__cell-body">{this.props.index}</td>
        <td className="table-posts__cell table-posts__cell-body">{this.props.title}</td>
        <td className="table-posts__cell table-posts__cell-body">{this.props.description}</td>
        <td className="table-posts__cell table-posts__cell-body">{this.props.date}</td>
        <td className="table-posts__cell table-posts__cell-body">
          <input
            type="checkbox"
            defaultChecked={this.props.isPublished}
            onClick={this.props.onPostPublished}
          />
        </td>
        <td className="table-posts__cell table-posts__cell-body">
          <span>
            <i
              className={`far fa-thumbs-up ${this.props.isLiked ? 'far fa-thumbs-up-active' : ''}`}
              onClick={this.props.onPostLiked}
            />
          </span>
        </td>
        <td className="table-posts__cell table-posts__cell-body" >
          <Button
            buttonType=" btn_del"
            handleClick={this.props.onDelete}
            label="delete"
          />
          <Button
            buttonType="btn_edit"
            handleClick={() => this.toggleChange()}
            label="edit"
          />
        </td>
      </tr>
    );
  }

  renderEdit() {
    return (
      <Form
        defaultTitleValue={this.props.title}
        defaultDescriptionValue={this.props.description}
        onChangeInput={({ title, description }) => this.handlePostEdit({ title, description })}
        buttonCancelClick={() => this.toggleChange()}
      />
    );
  }

  render() {
    const { isEditing } = this.state;
    if (isEditing) return this.renderEdit();
    return this.renderInit();
  }
}
Post.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  isPublished: PropTypes.bool.isRequired,
  onPostPublished: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onPostLiked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;
