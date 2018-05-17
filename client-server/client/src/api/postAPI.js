import axios from 'axios';
import store from '../store/store';
import { getPostsSuccess, addPostSuccess, deletePostSuccess, updatePostSuccess } from '../actions/postAction';

const url = 'http://localhost:3000';

export default {
  getPosts() {
    axios.get(`${url}/posts`)
      .then((res) => {
        store.dispatch(getPostsSuccess(res.data.posts));
        return res;
      });
  },

  deletePost(postId) {
    axios.delete(`${url}/posts/${postId}`)
      .then((res) => {
        store.dispatch(deletePostSuccess(postId));
        return res;
      });
  },

  addPost(post) {
    axios.post(`${url}/posts`, { post })
      .then((res) => {
        store.dispatch(addPostSuccess(res.data.post));
        return res;
      });
  },

  updatePost(post) {
    axios.put(`${url}/posts/${post._id}`, { post })
      .then((res) => {
        store.dispatch(updatePostSuccess(post));
        return res;
      });
  },
};
