import React from 'react';

export default class CommentsToggle extends React.Component {
  render() {
    return (
      <button className="button" onClick={this.props.toggleComments}>
        {this.props.isShow ? 'hide' : 'show'} comments</button>
    )
  }
}
