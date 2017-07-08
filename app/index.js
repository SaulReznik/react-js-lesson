import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './components/CommentsList.js';
import CommentsForm from './components/CommentsForm.js';




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
