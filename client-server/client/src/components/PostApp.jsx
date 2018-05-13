import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostsList from './PostsList';
import { addPost, deletePost } from '../actions/postAction';

function PostApp({ posts, addNewPost, onPostDelete }) {
  const newPost = {
    id: `${Date.now()}`,
    title: 'title3',
    description: 'description3',
  };
  return (
    <div>
      <button onClick={() => addNewPost(newPost)}>
        add post
      </button>
      <PostsList
        posts={posts}
        onPostDelete={onPostDelete}
      />
    </div>
  );
}

PostApp.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  addNewPost: PropTypes.func.isRequired,
  onPostDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  addNewPost: post => dispatch(addPost(post)),
  onPostDelete: postId => dispatch(deletePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostApp);
