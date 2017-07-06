import React from 'react';

export default class CommentsForm extends React.Component {
  render () {
    return (
      <form className="comments-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"/>
          <label htmlFor="text">Comment</label>
          <textarea name="text" id="text"></textarea>
          <input id="postCommit" type="submit" value="post commit"/>
      </form>
    )
  }
}
