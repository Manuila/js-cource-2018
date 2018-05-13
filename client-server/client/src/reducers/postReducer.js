
import * as types from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: '1',
      title: 'title1',
      description: 'description1',
    },
    {
      id: '2',
      title: 'title2',
      description: 'description2',
    },
  ],
};


const postReducer = (state = initialState, action) => {
  if (action.type === types.GET_POSTS) {
    return state.posts;
  }
  if (action.type === types.ADD_POST) {
    const newPosts = state.posts.slice();
    newPosts.unshift(action.post);
    // return Object.assign({}, state, { posts: newPosts });
    return {
      ...state,
      posts: newPosts,
    };
  }
  if (action.type === types.DELETE_POST) {
    const newPosts = state.posts.filter(post => post.id !== action.postId);
    return Object.assign({}, state, { posts: newPosts });
  }
  return state;
};
export default postReducer;
