import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import dateFormat from 'dateformat';

function PostsList({
  posts, onPostLiked, onPostPublished, onPostDelete, onPostEdit,
}) {
  return (
    <article className="todo-component__posts">
      <div className="todo-component__posts-table">
        <table className="table-posts">
          <thead className="table-posts__head">
            <tr className="table-posts__row table-posts__row-head">
              <th className="table-posts__cell table-posts__cell-head">#</th>
              <th className="table-posts__cell table-posts__cell-head">Title</th>
              <th className="table-posts__cell table-posts__cell-head">Description</th>
              <th className="table-posts__cell table-posts__cell-head">Сreation Date</th>
              <th className="table-posts__cell table-posts__cell-head">Publish</th>
              <th className="table-posts__cell table-posts__cell-head">Like</th>
              <th colSpan="2" className="table-posts__cell table-posts__cell-head">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="table-posts__body">
            {
                posts.map((post, i) => (<Post
                  key={post._id}
                  index={i + 1}
                  title={post.title}
                  description={post.description}
                  date={dateFormat(post.date, 'dd.mm.yyyy HH:MM')}
                  isPublished={post.isPublished}
                  isLiked={post.isLiked}
                  onPostLiked={() => onPostLiked(post)}
                  onPostPublished={() => onPostPublished(post)}
                  onDelete={() => onPostDelete(post._id)}
                  onEdit={({ title, description }) => onPostEdit(post, { title, description })}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </article>
  );
}
PostsList.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  onPostLiked: PropTypes.func.isRequired,
  onPostPublished: PropTypes.func.isRequired,
  onPostDelete: PropTypes.func.isRequired,
  onPostEdit: PropTypes.func.isRequired,
};
export default PostsList;
