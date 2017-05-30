import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names:[
        "1",
        "2",
        "3"
      ]
    };
  }
  inputChange = (e) => {
    // console.log(e.target.value);
    const val = e.target.value;
    this.setState({
      names: [
        ...this.state.names,
        val
      ]
    });
  };
  render() {
    return (
      <div>
        {this.state.names.map((elem, index) => {
          return <h1 key={index}>{elem}</h1>
        })}
        <input type="text" onChange={this.inputChange} />
    </div>);
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.container'));