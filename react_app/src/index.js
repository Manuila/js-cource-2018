import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));