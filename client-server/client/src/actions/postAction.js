import * as types from '../actions/actionTypes';

export const getPosts = posts => ({
  type: types.GET_POSTS,
  posts,
});

export const addPost = post => ({
  type: types.ADD_POST,
  post,
});

export const deletePost = postId => ({
  type: types.DELETE_POST,
  postId,
});
