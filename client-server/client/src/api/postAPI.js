import axios from 'axios';
import store from '../store/store';
import { getPostsSuccess, addPostSuccess, deletePostSuccess, updatePostSuccess } from '../actions/postAction';

export function getPosts() {
  return axios.get('/posts')
    .then((res) => {
      store.dispatch(getPostsSuccess(res.data));
      return res;
    });
}

export function deletePost(postId) {
  return axios.delete(`/posts/${postId}`)
    .then((res) => {
      store.dispatch(deletePostSuccess(postId));
      return res;
    });
}

export function addPost(post) {
  return axios.post('/posts', { post })
    .then((res) => {
      store.dispatch(addPostSuccess(res.data.post));
      return res;
    });
}

export function updatePost(post) {
  return axios.put(`/posts/${post._id}`, { post })
    .then((res) => {
      store.dispatch(updatePostSuccess(post));
      return res;
    });
}
