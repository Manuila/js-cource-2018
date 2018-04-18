import React, { Component } from 'react';
import Post from './post'

class PostsList extends Component {

  render() {
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
                this.props.posts.map((post, i) => {
                  return <Post
                    key={post.id}
                    index = {i + 1}
                    title={post.title}
                    description={post.description}
                    date = {post.date}
                    isPublished = {post.isPublished}
                    isLiked = {post.isLiked}
                    onPostLiked = {() => this.props.onPostLiked(post)}
                    onPostPublished = {() => this.props.onPostPublished(post)}
                    onDelete={() => this.props.onPostDelete(post)}
                    onEdit={({ title, description }) => this.props.onPostEdit(post, { title, description })}
                  />
                })
              }
            </tbody>
          </table>
        </div>
      </article>
    );
  };
}
  export default PostsList;