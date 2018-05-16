
import * as types from '../actions/actionTypes';

const initialState = {
  posts: [],
};


const postReducer = (state = initialState, action) => {
  if (action.type === types.GET_POSTS) {
    return {
      ...state,
      posts: action.posts,
    };
  }
  if (action.type === types.ADD_POST) {
    const newPosts = state.posts.slice();
    newPosts.unshift(action.post);
    return {
      ...state,
      posts: newPosts,
    };
  }
  if (action.type === types.DELETE_POST) {
    const newPosts = state.posts.filter(post => post._id !== action.postId);
    return {
      ...state,
      posts: newPosts,
    };
  }
  if (action.type === types.UPDATE_POST) {
    const newPosts = state.posts.slice();
    const index = newPosts.findIndex(post => post._id === action.post._id);
    newPosts[index] = action.post;
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};
export default postReducer;
