import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import { Form } from '../../Forms/FormAdd/formAdd';
import dateFormat from 'dateformat';
import Button  from '../../Button/button';
import PostService from '../../../services/PostService';

class PostCreator extends Component {
 
  state = {
    isAdding: false
  };

  componentWillMount() {
    this.postService = new PostService();
  }
  toggleChange = () =>{
    this.setState({
      isAdding: !this.state.isAdding,
    });
  }

  handlePostAdd = ({ title, description }) =>{
    const post = this.postService.create();
    post.title = title;
    post.description = description;
    this.props.onPostAdd(post);
    this.toggleChange();
  }
  renderInit = () => {
    return(
      <header className="todo-component__header">
        <h1 className='todo-component__header-title'>posts</h1>
        <Button
            style = "btn_add"
            handleClick = {this.toggleChange}
            title = "create"
        />
      </header>
    )
  }

  renderAdd = () => {
    return (
      <header className="todo-component__header">
        <h1 className='todo-component__header-title'>Create post</h1>
        <Form
          onChangeInput={this.handlePostAdd}
          buttonCancelClick = {this.toggleChange}
        />
      </header>
    );
  }

  render() {
    const {isAdding} = this.state;
    if(isAdding) return this.renderAdd();
    else return this.renderInit();
  }
}
export default PostCreator;
