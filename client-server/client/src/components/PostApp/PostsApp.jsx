import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import PostCreator from './PostCreator';
import * as postAPI from '../../api/postAPI';
import './postsApp.scss';

class PostsApp extends Component {
  componentWillMount() {
    postAPI.getPosts();
  }

  handlePostPublished = (post) => {
    post.isPublished = !post.isPublished;
    postAPI.updatePost(post);
  }

  handlePostLiked = (post) => {
    post.isLiked = !post.isLiked;
    postAPI.updatePost(post);
  }

  handlePostEdit = (post, { title, description }) => {
    post.title = title;
    post.description = description;
    postAPI.updatePost(post);
  }

  render() {
    if (this.props.posts.length) {
      console.log(this.props.posts.length);
      return (
        <article className="todo-component">
          <div className="todo-component__wrapper">
            <PostCreator
              onPostAdd={post => postAPI.addPost(post)}
            />
            <PostsList
              posts={this.props.posts}
              onPostLiked={post => this.handlePostLiked(post)}
              onPostPublished={post => this.handlePostPublished(post)}
              onPostDelete={id => postAPI.deletePost(id)}
              onPostEdit={(post, { title, description }) => this.handlePostEdit(post, { title, description })}
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
PostsApp.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
};
const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostsApp);
