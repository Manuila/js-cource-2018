import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostsApp from './components/PostsApp'

const App = () => (
  <div>
   <PostsApp/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));