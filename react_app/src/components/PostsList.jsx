import React, { Component } from 'react';
import Post from './Post'

class PostsList extends Component {

  render() {
    return (
      <article class="todo-component__posts">
        <div class="todo-component__posts-table">
          <table class="table-posts">
            <thead class="table-posts__head">
              <tr class="table-posts__row table-posts__row-head">
                <th class="table-posts__cell table-posts__cell-head">#</th>
                <th class="table-posts__cell table-posts__cell-head">Title</th>
                <th class="table-posts__cell table-posts__cell-head">Description</th>
                <th colspan="2" class="table-posts__cell table-posts__cell-head">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="table-posts__body">
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