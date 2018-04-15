import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

class PostEditor extends Component {
 
  state = {
    isAdding: false
  };
  
add = () => {
  this.setState({isAdding:true})
}

save = () => {
  this.setState({isAdding:false});
}

renderInit = () => {
  return(
    <header className="todo-component__header">
      <h1 className='todo-component__header-title'>posts</h1>
      <button className='btn btn_add' onClick={this.add}>create</button>
    </header>
  )
}

renderAdd = () => {
  return (
    <header className="todo-component__header">
      <h1 className='todo-component__header-title'>Create post</h1>
      <Form
        defaultTitleValue = {this.props.title}
        defaultDescriptionValue = {this.props.description}
        onChangeInput={({ title, description }) => {this.props.onPostAdd({  id: uuidv1(), title: title, description: description }), this.cancel();} }
        buttonCancelClick = {this.cancel}
      />
    </header>
  );
}

render(){
  const add = this.state.isAdding;
  
   if(add){
     return this.renderAdd();
   } else return this.renderInit();
  
  
}
}
export default PostEditor;
