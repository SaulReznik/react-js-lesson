/*import React from 'react';
import Comment from './Comment.js';
//import CommentsForm from './CommentsForm.js';
import firebase from './firebase.js'; */

export default class CommentAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    let answer = {
      author:'',
      text:''
    }
    };
  }

  setData = (e) => {
    e.preventDefault();
    const {author, text, answer} = this.state;

    firebase.database().ref().child('comments').push({
      author,
      text,
      
    })
  };
}
