import { Provider } from 'react-redux';
import { Router, Route, hasHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import PostsApp from './components/PostApp/PostsApp';
import store from './store/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './main.scss';

const App = () => (
  <div className="page__wrapper">
    <Header label="Task 4" />
    <main className="page__body">
      <Provider store={store}>
        <PostsApp />
      </Provider>
    </main>
    <Footer label="@2018" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
