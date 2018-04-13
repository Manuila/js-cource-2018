import React, { Component } from 'react';
import Post from './Post'

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
                    onDelete={() => this.props.onPostDelete(post)}
                    onEdit={(...data) => this.props.onPostEdit(post, ...data)}
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