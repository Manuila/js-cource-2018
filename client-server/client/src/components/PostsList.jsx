import React from 'react';
import Post from './Post';

function PostsList({ posts, onPostDelete }) {
  return (
    posts.map(post => (<Post
      key={post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      onDelete={() => onPostDelete(post.id)}
    />))
  );
}
export default PostsList;
