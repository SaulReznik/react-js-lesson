import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './CommentsList.js';
import CommentsForm from './CommentsForm.js';
import firebase from 'firebase';

var config = {
  apiKey: ' AIzaSyDfNfr1beBjNbV0UNI_EAR7JMDGBzCiy7E',
  databaseURL: 'https://first-app-fa8aa.firebaseio.com/'
}

firebase.initializeApp(config);

class MainComponent extends React.Component {
  render () {
    return (
      <div className="comments-box">
        <CommentsForm />
        <CommentsList />
      </div>
    )
  }
}

ReactDOM.render (
  <MainComponent />, document.getElementById('app')
)
