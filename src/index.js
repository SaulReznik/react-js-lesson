import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './list';

class App extends Component {

  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.container'));