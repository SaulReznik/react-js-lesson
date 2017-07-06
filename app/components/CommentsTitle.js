import React from 'react';

export default class CommentsTitle extends React.Component {
  _getCommentsTitle(commentsCounter) {
    if(commentsCounter == 0) {
      return 'No comments yet';
    } else if (commentsCounter == 1) {
      return '1 comment';
    } else {
      return `${commentsCounter} comments`;
    }
  }

  render() {
    return (
      <div className="comments-title">{this._getCommentsTitle(this.props.counter)}</div>
    )
  }
}
