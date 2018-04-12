import React, { Component } from 'react';

class Post extends Component {
    render() {
      return (
        <li>
          <div>
            {this.props.title}
            {this.props.description}
            <button onClick={this.props.onDelete}>Del</button>
            <button onClick={this.props.onEdit}>Edit</button>
          </div>
        </li>
      );
    }
  }
  export default Post;