import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

class PostEditor extends Component {
 
  state = {
    postData: {
      title: '',
      description: ''
    },
    add: false
  };
  
handleInput = (event, name) => {
  const newPostData = {
    ...this.state.postData
  }
  newPostData[name] = event.target.value;
  this.setState({postData : newPostData})
}

handlePostAdd = () => {
  const newPost = {
    id: uuidv1(),
    title: this.state.postData.title,
    description: this.state.postData.description,

  };
  this.props.onPostAdd(newPost);
  this.state.postData.title = '';
  this.state.postData.description = '';
}
add = () => {
  this.setState({add:true})
}

save = () => {
  this.setState({add:false});
  this.state.postData.title = '';
  this.state.postData.description = '';
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
      <input placeholder = "title"
        onChange={(event) => this.handleInput(event, 'title')}
        value={this.state.postData.title}
      />
       <input placeholder = "description"
        onChange={(event) => this.handleInput(event, 'description')}
        value={this.state.postData.description}
      />
      <div>
        <button className='btn btn_save' onClick={this.handlePostAdd}>Ok</button>
        <button className='btn btn_cancel' onClick={this.save}>Cancel</button>
      </div>
    </header>
  );
}

render(){
  const add = this.state.add;
  
   if(add){
     return this.renderAdd();
   } else return this.renderInit();
  
  
}
}
export default PostEditor;
