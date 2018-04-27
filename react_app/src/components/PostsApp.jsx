import React, { Component } from 'react';
import PostsList from './postsList'
import PostCreator from './postCreator'
import PostLocalStorage from '../storage/PostLocalStorage'
import LocalStoragePostRepository from '../repository/LocalStoragePostRepository'

class PostsApp extends Component {
  state = {
    posts: []
  }

  componentWillMount() {

    this.postLocalStorage = new PostLocalStorage();
    this.localStoragePostRepository = new LocalStoragePostRepository(this.postLocalStorage);
  }

  // is invoked immediately after a component is mounted
  componentDidMount = () => {
    const localPosts = this.localStoragePostRepository.getAll();
    if (localPosts) {
    this.setState({ posts: localPosts });
    }
  }

  // is invoked immediately after updating occurs
  componentDidUpdate = () => {
    return this._updateLocalStorage();
  }
  
  _updateLocalStorage = () => {
    this.postLocalStorage.saveAllPosts(this.state.posts);
  }
  
  handlePostAdd = (newPost) => {
    this.localStoragePostRepository.add(newPost);
    this.setState({ posts: this.localStoragePostRepository.getAll() });
  }

  handlePostDel = (post) => {
    this.localStoragePostRepository.remove(post);
    this.setState({ posts: this.localStoragePostRepository.getAll() });
  }

  handlePostPublished = (post) => {
    const index = this.localStoragePostRepository.indexOf(post);
    const selectedPost = this.localStoragePostRepository.find((storedPost) => storedPost.id === post.id);
    selectedPost.isPublished = !selectedPost.isPublished;
    this.localStoragePostRepository.addAt(index, selectedPost);
    this.setState({ posts: this.localStoragePostRepository.getAll() });
  }

  handlePostLiked = (post) => {
    const index = this.localStoragePostRepository.indexOf(post);
    const selectedPost = this.localStoragePostRepository.find((storedPost) => storedPost.id === post.id);
    selectedPost.isLiked = !selectedPost.isLiked;
    this.localStoragePostRepository.addAt(index, selectedPost);
    this.setState({ posts: this.localStoragePostRepository.getAll() });
  }

  handlePostEdit = (post, { title, description }) => {
    const index = this.localStoragePostRepository.indexOf(post);
    const selectedPost = this.localStoragePostRepository.find((storedPost) => storedPost.id === post.id);
    selectedPost.title = title;
    selectedPost.description = description;
    this.localStoragePostRepository.addAt(index, selectedPost);
    this.setState({ posts: this.localStoragePostRepository.getAll() });
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