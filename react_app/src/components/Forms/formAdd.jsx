import React, { Component } from "react";

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
            <input 
              ref={this.titleInput} 
              placeholder="title"
            />
          </div>
          <div className = "form-add__cell">
            <textarea
              rows="5" 
              name="text"
              ref={this.descriptionInput} 
              placeholder="description" 
            />
          </div>
          <div className = "form-add__cell">
            <button
              className='btn btn_save'
              onClick={this.handleClick} >Ok
            </button>
            <button
              className='btn btn_cancel' 
              onClick={this.props.buttonCancelClick}>Cancel
            </button>
          </div>
      </div>
    );
  }
}
