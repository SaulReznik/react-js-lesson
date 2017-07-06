import React, {Component} from 'react';
  import ReactDOM from 'react-dom';

let test = document.getElementById('test')

class Comment  extends Component {
  constructor(props) {

  }

  render () {
    return(
      <div>
        TESTING
      </div>
    )

  }
}

ReactDOM.render(
  <Comment/>,document.getElementById('app')
)

/*To Do
   1.sarqem component,vory postCommit input sexmeluc render kani comments-body divum, comments-list ul-um kavelacni comment
   2.hly vor etqany...
