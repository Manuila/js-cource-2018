import React from 'react';
import PropTypes from 'prop-types';

function Post({
  id, title, description, onDelete,
}) {
  return (
    <li>
      {id}
      {title}
      {description}
      <button onClick={onDelete}>delete</button>
    </li>
  );
}
Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;
