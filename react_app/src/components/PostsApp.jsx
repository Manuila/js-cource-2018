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

  handlePostSearch = (event, nameProp) => {
    const searchQuery = event.target.value.toLowerCase();
    const savedPosts = this.localStoragePostRepository.getAll()
    const displayedPosts = savedPosts.filter((post) => {
      const searchValue = post[nameProp].toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({ posts: displayedPosts });
  };
 
  render() {
    
    if(this.localStoragePostRepository.getAll().length){
      return (
        <article className="todo-component">
          <div className="todo-component__wrapper">
            <PostCreator 
              onPostAdd={this.handlePostAdd}
            /> 
            <input type="text" className="search-field" onChange={(event, nameProp) => this.handlePostSearch(event, "title")} />
            <input type="text" className="search-field" onChange={(event, nameProp) => this.handlePostSearch(event, "description")} />
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