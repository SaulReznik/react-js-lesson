/*import React from 'react';
import Comment from './Comment.js';
import CommentsForm from './CommentsForm.js';
import firebase from './firebase.js';*/

export default class CommentAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    let answer = {
      name:'',
      aText:''
    }
    };
  }

  setData = (e) => {
    e.preventDefault();
    const {author, text, answer} = this.state;

    firebase.database().ref().child('comments').push({
      name,
      aText,

    })
  }

  addAnswer = (e) => {
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
