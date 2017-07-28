import React from 'react';
import Comment from './Comment.js';
import CommentsForm from './CommentsForm.js';
import firebase from './firebase.js';

export default class CommentAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
  }
  addAnswer = (e) => {
    e.preventDefault();
    const { author, text } = this.state;
    let { answers } = this.props;

    if(answers) {
      answers.push({
        author,
        text
      })
    } else {
      answers = [{
        author,
        text
      }]
    }
    firebase.database().ref().child('comments/' + this.props.id).set({
      author: this.props.author,
      text: this.props.text,
      answers
    })
  };
  render() {
    return (
      <form  onSubmit={this.addAnswer} className='answerField'>
        <input type='text'
               id='author'
               name='author'
               value={this.state.author}
               onChange={(e) => this.setState({author: e.target.value})}
        />
        <input type='text'
               id='text'
               name='text'
               value={this.state.text}
               onChange={(e) => this.setState({text: e.target.value})}
        />
        <input type='submit' id='answerCommit' name='answerCommit'/>
      </form>
    )
  }
}
