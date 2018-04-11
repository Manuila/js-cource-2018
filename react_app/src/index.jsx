 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 const uuidv1 = require('uuid/v1');

class Post extends Component{
  render() {
    return(
      <li>
        <div>
          {this.props.title} 
          {this.props.description}
          <button onClick = {this.props.onDelete}>Del</button>
          <button onClick = {this.props.onEdit}>Edit</button>
        </div>
      </li>
    );
  }
}

class PostsGrid extends Component {
 
  render() {
    return (
      <ul>
        {
          this.props.posts.map(item => {
            return <Post
              key = {item.id}
              title = {item.title}
              description = {item.description}
              onDelete = {this.props.onPostDelete.bind(null, item)}
              onEdit = {this.props.onPostEdit.bind(null, item)}
            />
          })
        }
      </ul>
    );
  }
}
class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      description: ' '
    
    };
    this.handleTextTitleChange = this.handleTextTitleChange.bind(this);
    this.handleTextDescriptionChange = this.handleTextDescriptionChange.bind(this);
    this.handlePostAdd = this.handlePostAdd.bind(this);
  }
  
  handleTextTitleChange(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  handleTextDescriptionChange(event) {
    console.log(event.target.value);
    this.setState({ description: event.target.value });
  }

  handlePostAdd(){
    const newPost = {
      id: uuidv1(),
      title: this.state.title,
      description: this.state.description
      
    };
    this.props.onPostAdd(newPost);
    this.state.title = '';
    this.state.description = '';
  }
  render() {
    return(
      <div>
       <input
          onChange={this.handleTextTitleChange}
          value={this.state.title}
        />
         <input
          onChange={this.handleTextDescriptionChange}
          value={this.state.description}
        />
        <button onClick = {this.handlePostAdd}>
            Add
        </button>
      </div>
    );
  }
}
class PostsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.handlePostAdd = this.handlePostAdd.bind(this);
    this.handlePostDel = this.handlePostDel.bind(this);
    this.handlePostEdit = this.handlePostEdit.bind(this);
  }

  componentDidMount(){
    var localPosts = JSON.parse(localStorage.getItem('posts'));
    if (localPosts) {
        this.setState({ posts: localPosts });
    }
  }
  componentDidUpdate(){
    return this._updateLocalStorage();
  }

  _updateLocalStorage() {
    const posts = JSON.stringify(this.state.posts);
    localStorage.setItem('posts', posts);
  }
  
  handlePostAdd(newPost){
    const newPosts = this.state.posts.slice();
    newPosts.unshift(newPost);
    this.setState({posts: newPosts});
  }

  handlePostDel(post){
    const postId = post.id;
    const newPosts = this.state.posts.filter((post) => {
      return post.id !== postId;
    });
    this.setState({posts: newPosts});
  }
  handlePostEdit(post){
    const newPosts = this.state.posts.slice();
    const index = newPosts.findIndex((storedPost) => storedPost.id === post.id);
    newPosts[index].title = 'newTitle';
    newPosts[index].description = 'newDescription';
    this.setState({posts: newPosts});
  }

  render() {
    return(
      <div>
        <PostEditor onPostAdd = {this.handlePostAdd}/>
        <PostsGrid 
          posts = {this.state.posts} 
          onPostDelete = {this.handlePostDel}
          onPostEdit = {this.handlePostEdit}
        />
      </div>
    );
  }
}

ReactDOM.render(<PostsApp />, document.getElementById('root'));