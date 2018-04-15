import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form } from "./form";

class Post extends Component {
  state = {
    isEditing: false
  };

  edit = () => {
    this.setState({isEditing:true})
  }
  
  cancel = () => {
    this.setState({isEditing:false});
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
      <Form
        defaultTitleValue = {this.props.title}
        defaultDescriptionValue = {this.props.description}
        onChangeInput={({ title, description }) => {this.props.onEdit({ title, description }), this.cancel();} }
        buttonCancelClick = {this.cancel}
      />
    </tr>
    );
  }

  render(){
    const edit = this.state.isEditing;
    
     if(edit){
       return this.renderEdit();
     } else return this.renderInit();
    
    
  }
}
export default Post