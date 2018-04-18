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
      <tr className="table-posts__row table__row-body">
       <td className="table-posts__cell table-posts__cell-body"></td>
       <td className="table-posts__cell table-posts__cell-body">
          <input 
            ref={this.titleInput} 
            defaultValue = {this.props.defaultTitleValue}
          />
        </td>
        <td className="table-posts__cell table-posts__cell-body">
        <textarea
          rows="5" 
          cols="25" 
          name="text"
          ref={this.descriptionInput} 
          defaultValue = {this.props.defaultDescriptionValue}
        />
        </td>
        <td className="table-posts__cell table-posts__cell-body"></td>
        <td className="table-posts__cell table-posts__cell-body"></td>
        <td className="table-posts__cell table-posts__cell-body"></td>
        <td className="table-posts__cell table-posts__cell-body">
          <button
            className='btn btn_save'
            onClick={this.handleClick} >Ok
          </button>
          <button
            className='btn btn_cancel' 
            onClick={this.props.buttonCancelClick}>Cancel
          </button>
        </td>
      </tr>
    );
  }
}
