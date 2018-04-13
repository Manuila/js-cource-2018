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
    this.props.onEdit(
      this.state.postData.title,
      this.state.postData.description
    );
    this.setState({edit:false});
  }
  cancel = () => {
    this.setState({edit:false});
    this.state.postData.title = this.props.title;
    this.state.postData.description = this.props.description;
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
        <tr className="table-posts__row table__row-body">
          <td className="table-posts__cell table-posts__cell-body">{this.props.index}</td>
          <td className="table-posts__cell table-posts__cell-body">{this.props.title}</td>
          <td className="table-posts__cell table-posts__cell-body">{this.props.description}</td>
          <td className="table-posts__cell table-posts__cell-body" >
              <button className='btn btn_del' onClick = {this.props.onDelete}>delete</button>
              <button className='btn btn_edit'onClick={this.edit}>edit</button>
          </td>
        </tr>                  
    )
  }

  renderEdit = () => {
    return(
        <tr className="table-posts__row table__row-body">
          <td className="table-posts__cell table-posts__cell-body">{this.props.index}</td>
          <td className="table-posts__cell table-posts__cell-body">
            <input
              value = {this.state.postData.title}
              onChange = {(event) => this.handleInput(event, 'title')}
            />
          </td>
          <td className="table-posts__cell table-posts__cell-body">
            <input
              value = {this.state.postData.description}
              onChange = {(event) => this.handleInput(event, 'description')}
            />
          </td>
          <td className="table-posts__cell table-posts__cell-body" >
              <button className='btn btn_save'onClick={this.save}>Ok</button>
              <button className='btn btn_cancel'onClick={this.cancel}>Cancel</button>
          </td>
        </tr>           
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