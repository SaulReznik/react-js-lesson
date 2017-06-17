import React, {Component} from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: ''
    };
  }
  handleButtonClick = () => {
    const { list } = this.state;
    list.push({name: this.state.value, checked: false});
    this.setState({
      list,
      value:''
    })
  };

  handleCheckBoxClick = (boolean, index) => {
    const { list } = this.state;

    list[index].checked = boolean;
    this.setState({
      list
    });
  };
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.list.map((elem, i) => {
              return (
                <li key={i} style={{ textDecoration: elem.checked ? "line-through" : "none" }}>
                  <input type="checkbox" onClick={(e) => this.handleCheckBoxClick(e.target.checked, i)}/>{elem.name}
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