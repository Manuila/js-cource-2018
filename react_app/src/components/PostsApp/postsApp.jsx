import React, { Component } from 'react';
import PostsList from './PostsList/postsList'
import PostCreator from './PostCreator/postCreator'
import LocalStoragePostsListDAO from '../../dao/LocalStoragePostsListDAO'
import PostsListService from '../../services/PostsListService'
import scss from './postsApp.scss';

class PostsApp extends Component {
  state = {
    posts: []
  }

  componentWillMount() {
    this.localStoragePostsListDAO = new LocalStoragePostsListDAO();
    this.postsListService = new PostsListService(this.localStoragePostsListDAO);
  }

  // is invoked immediately after a component is mounted
  componentDidMount = () => {
    const localPosts = this.postsListService.getAll();
    if (localPosts) {
    this.setState({ posts: localPosts });
    }
  }

  handlePostAdd = (post) => {
    this.postsListService.add(post);
    this.setState({ posts: this.postsListService.getAll() });
  }

  handlePostDel = (post) => {
    this.postsListService.remove(post);
    this.setState({ posts: this.postsListService.getAll() });
  }

  handlePostPublished = (post) => {
    const selectedPost = this.postsListService.getById(post.id);
    selectedPost.isPublished = !selectedPost.isPublished;
    this.postsListService.update(selectedPost);
    this.setState({ posts: this.postsListService.getAll() });
  }

  handlePostLiked = (post) => {
    const selectedPost = this.postsListService.getById(post.id);
    selectedPost.isLiked = !selectedPost.isLiked;
    this.postsListService.update(selectedPost);
    this.setState({ posts: this.postsListService.getAll() });
  }

  handlePostEdit = (post, { title, description }) => {
    const selectedPost = this.postsListService.getById(post.id);
    selectedPost.title = title;
    selectedPost.description = description;
    this.postsListService.update(selectedPost);
    this.setState({ posts: this.postsListService.getAll() });
  }

  render() {
    
    if(this.state.posts.length){
      return (
        <article className="todo-component">
          <div className="todo-component__wrapper">
            <PostCreator 
              onPostAdd={this.handlePostAdd}
            /> 
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