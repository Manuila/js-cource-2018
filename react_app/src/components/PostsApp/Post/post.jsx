import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../../Forms/FormEdit/formEdit';
import Button  from '../../Button/button';

class Post extends Component {
  state = {
    isEditing: false
  };

  toggleChange = () =>{
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }
  
  handlePostEdit = ({ title, description }) => {
    this.props.onEdit({title, description });
    this.toggleChange();
  }

  renderInit = () => {
    return(
        <tr className="table-posts__row table__row-body">
          <td className="table-posts__cell table-posts__cell-body">{this.props.index}</td>
          <td className="table-posts__cell table-posts__cell-body">{this.props.title}</td>
          <td className="table-posts__cell table-posts__cell-body">{this.props.description}</td>
          <td className="table-posts__cell table-posts__cell-body">{this.props.date}</td>
          <td className="table-posts__cell table-posts__cell-body">
            <input 
              type="checkbox"
              checked = {this.props.isPublished}
              onClick = {this.props.onPostPublished}
            />
          </td>
          <td className="table-posts__cell table-posts__cell-body">
            <span>
              <i
                className={`far fa-thumbs-up ${this.props.isLiked ? "far fa-thumbs-up-active" : ""}`}
                onClick={this.props.onPostLiked}
              />
            </span>
          </td>
          <td className="table-posts__cell table-posts__cell-body" >
            <Button
              style = " btn_del"
              handleClick = {this.props.onDelete}
              title = "delete"
            />
            <Button
              style = "btn_edit"
              handleClick = {this.toggleChange}
              title = "edit"
            />
          </td>
        </tr>                  
    )
  }

  renderEdit = () => {
    return(
     
      <Form
        defaultTitleValue = {this.props.title}
        defaultDescriptionValue = {this.props.description}
        onChangeInput = {this.handlePostEdit}
        buttonCancelClick = {this.toggleChange}
      />
   
    );
  }

  render(){
    const isEditing = this.state.isEditing;
    if(isEditing) return this.renderEdit();
    else return this.renderInit();
  }
}
export default Post