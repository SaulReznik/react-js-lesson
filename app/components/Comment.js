import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import CommentsForm from './CommentsForm.js';




export default class Comment extends React.Component {

  addAnswer() {
    return (
      <div className='answerField'>
        <input type='text'id='name' name='name' value=''/>
        <input type='text'id='aText' name='aText' value=''/>
        <input type='submit' id='answerCommit' name='answerCommit'/>
      </div>
    )
  }

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
          <a className='answerButton' onClick={this.props.addAnswer}>answer</a>
      </li>
    )
  }
}
