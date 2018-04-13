import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostsApp from './components/PostsApp'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div  className="page__wrapper">
    <Header/>
    <main className="page__body">
      <PostsApp/>
    </main>
    <Footer/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));