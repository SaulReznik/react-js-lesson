import React from 'react';
import firebase from 'firebase';



export default class CommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
      answer: {
        name: '',
        aText: ''
      }
    };
  }

  setData = (e) => {
    e.preventDefault();
    const {author, text, answer} = this.state;

    firebase.database().ref().child('comments').push({
      author,
      text,
      answer
    })
  };

  render() {
    const {author, text, answer} = this.state;
    return (
      <form className="comments-form" onSubmit={this.setData}>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" value={ author }
               onChange={(e) => this.setState({author: e.target.value})}/>
        <label htmlFor="text">Comment</label>
        <textarea name="text" id="text" value={ text } onChange={(e) => this.setState({text: e.target.value})}/>
        <input id="postCommit" type="submit" value="post commit"/>
      </form>
    )
  }
}
