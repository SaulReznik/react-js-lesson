import React from 'react';
import firebase from './firebase';
import CommentsForm from './CommentsForm.js';

var answer = {
  name:'',
  aText:''
}

export default class Comment extends React.Component {

  addAnswer = () => {
    return (
      <form className='answer'>
          <label htmlFor="answerAuthor">Author</label>
            <input type="text" id="authorAnswer" name="authorAnswer" value={ answer }
                   onChange={(e) => this.setState({name: e.target.value})}/>
                 <label htmlFor="answerText">Comment</label>
            <textarea name="answerText" id="answerText" value={ answer } onChange={(e) => this.setState({aText: e.target.value})}/>
            <input id="postCommit" type="submit" value="post commit"/>
      </form>
    )
  }

  removeComment = () => {
    firebase.database().ref().child('comments/' + this.props.id).remove();
  };

  render() {
    console.log(this.state);
    return (
      <li className="comments-item">
          <h3>
              {this.props.author}
              <a className='deleteButton' onClick={this.removeComment}>delete</a>
          </h3>
          <p>{this.props.text}</p>
          <a className='answerButton' onClick={this.addAnswer}>answer</a>
      </li>
    )
  }
}
