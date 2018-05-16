import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import PostCreator from './PostCreator';
import * as postAPI from '../../api/postAPI';
import './postsApp.scss';
import store from '../../store/store';

class PostsApp extends Component {
  componentWillMount() {
    postAPI.getPosts();
  }

  handlePostPublished = (id) => {
    postAPI.getPost(id)
      .then((post) => {
        post.isPublished = !post.isPublished;
        postAPI.updatePost(post);
      });
  }

  handlePostLiked = (id) => {
    postAPI.getPost(id)
    .then((post) => {
      selectedPost.isLiked = !selectedPost.isLiked;
      postAPI.updatePost(post);
    });
  }

  handlePostEdit = (id, { title, description }) => {
    postAPI.getPost(id)
    .then((post) => {
      post.title = title;
      post.description = description;
      postAPI.updatePost(post);
    });
  }

  render() {
    if (this.props.posts.length) {
      console.log(this.props.posts.length);
      //console.log(store.getState());
      return (
        <article className="todo-component">
          <div className="todo-component__wrapper">
            <PostCreator
              onPostAdd={post => postAPI.addPost(post)}
            />
            <PostsList
              posts={this.props.posts}
              onPostLiked={id => this.handlePostLiked(id)}
              onPostPublished={id => this.handlePostPublished(id)}
              onPostDelete={id => postAPI.deletePost(id)}
              onPostEdit={(id, { title, description }) => this.handlePostEdit(id, { title, description })}
            />
          </div>
        </article>
      );
    }
    return (
      <article className="todo-component">
        <div className="todo-component__wrapper">
          <PostCreator
            onPostAdd={post => postAPI.addPost(post)}
          />
          <div className="no-posts">No posts</div>
        </div>
      </article>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostsApp);
