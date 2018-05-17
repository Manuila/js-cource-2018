
import * as types from '../actions/actionTypes';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    case types.ADD_POST: {
      const newPosts = state.posts.slice();
      newPosts.unshift(action.post);
      return {
        ...state,
        posts: newPosts,
      };
    }
    case types.DELETE_POST: {
      const newPosts = state.posts.filter(post => post._id !== action.postId);
      return {
        ...state,
        posts: newPosts,
      };
    }
    case types.UPDATE_POST: {
      const newPosts = state.posts.slice();
      const index = newPosts.findIndex(post => post._id === action.post._id);
      newPosts[index] = action.post;
      return {
        ...state,
        posts: newPosts,
      };
    }
    default: return state;
  }
};
export default postReducer;
