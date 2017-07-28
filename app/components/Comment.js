import React from 'react';
import firebase from './firebase';
import Answer from './CommentAnswer.js';




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
              <a className='deleteButton' onClick={this.removeComment}>delete</a>
          </h3>
          <p>{this.props.text}</p>
          <Answer id={this.props.id} author={this.props.author} text={this.props.text} answers={this.props.answers} />
      </li>
    )
  }
}
