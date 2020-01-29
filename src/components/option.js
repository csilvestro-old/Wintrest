import React, { Component } from "react";

class Option extends Component() {
  change = e => {
    let selectedItem = e.target.value;
    this.props.selectChange(selectedItem);
  };

  render() {
    const arr = this.props.list1;
    let option = arr.map(user => (
      <option key={user.id} value={user.id}>
        {user.first}
      </option>
    ));
    return (
      <select onChange={this.change}>
        <option>select name</option>
        {option}
      </select>
    );
  }
}

export default Option;
