import React, { Component } from "react";
import scss from './formAdd.scss';
import Button  from '../../Button/button';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();   
  }
  
  handleClick = input => {
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;
    if (title){
      this.props.onChangeInput({ title, description });
    }
  };

  render() {
    return (
      <div className = "form-add">
         <div className = "form-add__cell">
            <input className = "form-add__cell__input"
              ref={this.titleInput} 
              placeholder="title"
            />
          </div>
          <div className = "form-add__cell">
            <textarea className = "form-add__cell__textarea"
              rows="5" 
              name="text"
              ref={this.descriptionInput} 
              placeholder="description" 
            />
          </div>
          <div className = "form-add__cell">
            <Button
                style = "btn_save"
                handleClick = {this.handleClick}
                title = "Ok"
            />
            <Button
                style = "btn_cancel"
                handleClick = {this.props.buttonCancelClick}
                title = "Cancel"
            />
          </div>
      </div>
    );
  }
}
