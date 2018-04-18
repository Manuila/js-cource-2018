import React, { Component } from 'react';
import PostsList from './postsList'
import PostCreator from './postCreator'

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

  handlePostPublished = (post) => {
    const newPosts = this.state.posts.slice();
    const index = newPosts.findIndex((storedPost) => storedPost.id === post.id);
    newPosts[index].isPublished = !newPosts[index].isPublished;
    this.setState({ posts: newPosts });
  }

  handlePostLiked = (post) => {
    const newPosts = this.state.posts.slice();
    const index = newPosts.findIndex((storedPost) => storedPost.id === post.id);
    newPosts[index].isLiked = !newPosts[index].isLiked;
    this.setState({ posts: newPosts });
  }

  handlePostEdit = (post, { title, description }) => {
    const newPosts = this.state.posts.slice();
    const index = newPosts.findIndex((storedPost) => storedPost.id === post.id);
    newPosts[index].title = title;
    newPosts[index].description = description;
    this.setState({ posts: newPosts });
  }

  render() {
    if(this.state.posts.length){
      return (
        <article className="todo-component">
          <div className="todo-component__wrapper">
            
            <PostCreator 
              onPostAdd={this.handlePostAdd} />
            <PostsList
              posts={this.state.posts}
              onPostLiked = {this.handlePostLiked}
              onPostPublished = {this.handlePostPublished}
              onPostDelete={this.handlePostDel}
              onPostEdit={this.handlePostEdit}
            />
          </div>
        </article>
      );
    }
    else{
      return (
        <article className="todo-component">
          <div className="todo-component__wrapper">
            <PostCreator 
              onPostAdd={this.handlePostAdd} />
              <div className = "no-posts">No posts</div>
          </div>
        </article>
      );
    }
  }
}
export default PostsApp