import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import { Form } from "./Forms/formAdd";
import dateFormat from 'dateformat';

class PostCreator extends Component {
 
  state = {
    isAdding: false
  };

toggleChange = () =>{
  this.setState({
    isAdding: !this.state.isAdding,
  });
}

handlePostAdd = ({ title, description }) =>{
  this.props.onPostAdd({
      id: uuidv1(), 
      title: title, 
      description: description,
      date: dateFormat(new Date(), "mmmm dS, yyyy, h:MM:ss TT"),
      isPublished: false,
      isLiked: false
    });
  this.toggleChange();
}
renderInit = () => {
  return(
    <header className="todo-component__header">
      <h1 className='todo-component__header-title'>posts</h1>
      <button className='btn btn_add' onClick={this.toggleChange}>create</button>
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

  render(){
    const {isAdding} = this.state;
    if(isAdding) return this.renderAdd();
    else return this.renderInit();
  }
}
export default PostCreator;
