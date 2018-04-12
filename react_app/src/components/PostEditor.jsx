import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

class PostEditor extends Component {
 
  state = {
    postData: {
      title: '',
      description: ''
    }
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

render() {
  return (
    <div>
      <input
        onChange={(event) => this.handleInput(event, 'title')}
        value={this.state.postData.title}
      />
       <input
        onChange={(event) => this.handleInput(event, 'description')}
        value={this.state.postData.description}
      />
      <button onClick={this.handlePostAdd}>
        Add
      </button>
    </div>
  );
}
}
export default PostEditor;
