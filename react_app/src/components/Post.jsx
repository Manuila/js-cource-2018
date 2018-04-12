import React, { Component } from 'react';

class Post extends Component {
  
  state = {
    postData: {
      title: this.props.title,
      description: this.props.description,
    },
    edit: false
  };

  edit = () => {
    this.setState({edit:true})
  }

  save = () => {
    this.setState({edit:false});
    this.props.onEdit(
      this.state.postData.title,
      this.state.postData.description
    );
  }
  
  handleInput = (event, name) => {
    const newPostData = {
      ...this.state.postData
    }
    newPostData[name] = event.target.value;
    this.setState({postData : newPostData})
  }

  renderInit = () => {
    return(
      <div>
        <span>
          {this.props.title}
        </span>
        <span>
          {this.props.description}
        </span>
        <button onClick={this.edit}>Edit</button>
        <button onClick = {this.props.onDelete}>Delete</button>
      </div>
    )
  }

  renderEdit = () => {
    return(
      <div>
        <input
          value = {this.state.postData.title}
          onChange = {(event) => this.handleInput(event, 'title')}
        />
         <input
          value = {this.state.postData.description}
          onChange = {(event) => this.handleInput(event, 'description')}
        />
        <button onClick={this.save}>Save</button>
      </div>
    )
  }

  render(){
    const edit = this.state.edit;
    
     if(edit){
       return this.renderEdit();
     } else return this.renderInit();
    
    
  }
}
export default Post