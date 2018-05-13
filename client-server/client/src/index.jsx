import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import PostsApp from './components/PostApp';
import store from './store/store';

const App = () => (
  <div>
    <Provider store={store}>
      <PostsApp />
    </Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
