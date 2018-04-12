import React, { Component } from 'react';
import PostsList from './PostsList'
import PostEditor from './PostEditor'

class PostsApp extends Component {

  state = {
    posts: []
  }
  // is invoked immediately after a component is mounted
  componentDidMount = () => {
    var localPosts = JSON.parse(localStorage.getItem('posts'));
    if (localPosts) {
      this.setState({ posts: localPosts });
    }
  }

  // is invoked immediately after updating occurs
  componentDidUpdate = () => {
    return this._updateLocalStorage();
  }

  _updateLocalStorage = () => {
    const posts = JSON.stringify(this.state.posts);
    localStorage.setItem('posts', posts);
  }

  handlePostAdd = (newPost) => {
    // create a copy posts
    const newPosts = this.state.posts.slice();
    newPosts.unshift(newPost);
    this.setState({ posts: newPosts });
  }

  handlePostDel = (post) => {
    const postId = post.id;
    const newPosts = this.state.posts.filter((post) => {
      return post.id !== postId;
    });
    this.setState({ posts: newPosts });
  }
  
  handlePostEdit = (post, ...updateData) => {
    const newPosts = this.state.posts.slice();
    const index = newPosts.findIndex((storedPost) => storedPost.id === post.id);
    newPosts[index].title = updateData[0];
    newPosts[index].description = updateData[1];
    this.setState({ posts: newPosts });
  }

  render() {
    return (
      <div>
        <PostEditor 
          onPostAdd={this.handlePostAdd} />
        <PostsList
          posts={this.state.posts}
          onPostDelete={this.handlePostDel}
          onPostEdit={this.handlePostEdit}
        />
      </div>
    );
  }
}
export default PostsApp