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
    this.props.onChangeInput({ title, description });
  };

  render() {
    return (
      <div>
        <input 
          ref={this.titleInput} 
          defaultValue = {this.props.defaultTitleValue}/>
        <input
          ref={this.descriptionInput} 
          defaultValue = {this.props.defaultDescriptionValue} />
        <button
          className='btn btn_save'
          onClick={this.handleClick} >Ok
        </button>
        <button
          className='btn btn_cancel' 
          onClick={this.props.buttonCancelClick}>Cancel
        </button>
      </div>
    );
  }
}
