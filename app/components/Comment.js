import React from 'react';

export default class Comment extends React.Component {
  render() {
          console.log(this.props);
    return (
      <li className="comments-item">
          <h3>
              {this.props.author}
              <a href="#">delete</a>
          </h3>
          <p>{this.props.text}</p>
      </li>
    )
  }
}
