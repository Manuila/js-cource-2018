import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostsApp from './components/PostsApp/postsApp'
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import scss from './main.scss';

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