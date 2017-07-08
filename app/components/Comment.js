import React from 'react';
import firebase from './firebase';

export default class Comment extends React.Component {

  removeComment = () => {
    firebase.database().ref().child('comments/' + this.props.id).remove();
  };

  render() {
          console.log(this.props);
    return (
      <li className="comments-item">
          <h3>
              {this.props.author}
              <a href="#" onClick={this.removeComment}>delete</a>
          </h3>
          <p>{this.props.text}</p>
      </li>
    )
  }
}
