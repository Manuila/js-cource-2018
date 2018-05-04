import React, { Component } from 'react';
import { Form } from '../../Forms/FormSearch/formSearch';

class PostCreator extends Component {
 
  state = {
    isSearching: false
  };

toggleChange = () =>{
  this.setState({
    isSearching: !this.state.isSearching,
  });
}

handlePostSearch = ( title) =>{
  this.props.onPostSearch(title );
}
renderInit = () => {
  return(
    <header className="todo-component__header">
      <button className='btn btn_add' onClick={this.toggleChange}>Search</button>
    </header>
  )
}

renderAdd = () => {
  return (
    <header className="todo-component__header">
      <Form
        onChangeInputTitle={this.handlePostSearch}
        buttonCancelClick = {this.toggleChange}
      />
    </header>
  );
}

  render(){
    const {isSearching} = this.state;
    if(isSearching) return this.renderAdd();
    else return this.renderInit();
  }
}
export default PostCreator;
