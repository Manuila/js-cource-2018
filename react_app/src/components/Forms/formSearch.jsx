import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();   
  }
  
  handleClickTitle = input => {
    const title = this.titleInput.current.value;
    this.props.onChangeInputTitle( title );
  };

  render() {
    return (
      <div className = "form-add">
         <div className = "form-add__cell">
            <input 
              ref={this.titleInput} 
              placeholder="title"
              onChange = {this.handleClickTitle}
            />
          </div>
          <div className = "form-add__cell">
            <input 
              ref={this.descriptionInput} 
              placeholder="description" 
            />
          </div>
          <div className = "form-add__cell">
            <button
              className='btn btn_cancel' 
              onClick={this.props.buttonCancelClick}>Cancel
            </button>
          </div>
      </div>
    );
  }
}