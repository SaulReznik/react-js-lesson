import React, {Component} from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: ''
    };
  }
  handleButtonClick = (e) => {
    const { list } = this.state;
    list.push({name: this.state.value, checked: false});
    this.setState({
      list
    })
  };
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.list.map((elem, i) => {
              return (
                <li key={i} style={{ textDecoration: this.state.checked.includes(i) ? "line-through" : "none" }}>
                  <input type="checkbox" />{elem.name}
                </li>
              );
            })}
          </ul>
          <input type="text" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}/>
          <button onClick={this.handleButtonClick}>
            Add Item
          </button>
        </div>
      </div>
    );
  }
}
export default List;