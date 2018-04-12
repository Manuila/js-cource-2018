import React, { Component } from 'react';
import Post from './Post'
class PostsList extends Component {

    render() {
      return (
        <ul>
          {
            this.props.posts.map(post => {
              return <Post
                key={post.id}
                title={post.title}
                description={post.description}
                onDelete={() => this.props.onPostDelete(post)}
                onEdit={() => this.props.onPostEdit(post)}//this.props.onPostEdit.bind(null, post)
              />
            })
          };
        </ul>
      );
    };
  }
  export default PostsList;