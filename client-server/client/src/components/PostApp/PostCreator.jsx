import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormAdd from '../Forms/FormAdd/FormAdd';
import Button from '../Button/Button';

class PostCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { isAdding: false };
  }
  toggleChange() {
    this.setState({
      isAdding: !this.state.isAdding,
    });
  }

  handlePostAdd({ title, description }) {
    const post = {
      title,
      description,
    };
    this.props.onPostAdd(post);
    this.toggleChange();
  }
  renderInit() {
    return (
      <header className="todo-component__header">
        <h1 className="todo-component__header-title">posts</h1>
        <Button
          buttonType="btn_add"
          handleClick={() => this.toggleChange()}
          label="create"
        />
      </header>
    );
  }

  renderAdd() {
    return (
      <header className="todo-component__header">
        <h1 className="todo-component__header-title">Create post</h1>
        <FormAdd
          onChangeInput={({ title, description }) => this.handlePostAdd({ title, description })}
          buttonCancelClick={() => this.toggleChange()}
        />
      </header>
    );
  }

  render() {
    const { isAdding } = this.state;
    if (isAdding) return this.renderAdd();
    return this.renderInit();
  }
}
PostCreator.propTypes = {
  onPostAdd: PropTypes.func.isRequired,
};
export default PostCreator;
