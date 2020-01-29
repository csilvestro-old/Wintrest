import React, { Component } from "react";
import DashHeader from "../../components/DashHeader";
// import Option from "../../components/option";

// const Options = [
//   {
//     user: {
//       first: "",
//       last: ""
//     }
//   }
// ];
class Following extends Component {
  state = {
    list1: {
      id: "",
      user: {
        first: "Tom",
        last: "Jones"
      }
    },
    list2: {
      id: "",
      user: {
        first: "Jim",
        last: "Doug"
      }
    }
  };

  change = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <DashHeader />
        <select value={this.state.list1.user.first} onChange={this.change}>
          <option name="Item1" value="Tom">
            Item1
          </option>
          <option name="Item2" value="Tim">
            Item2
          </option>
          <option name="Item3" value="Chance">
            Item3
          </option>
          <option name="Item4" value="Bob">
            Item4
          </option>
        </select>
        <select onChange={this.change}>
          <option defaultValue="Jim">Item1</option>
          <option value="Chase">Item2</option>
          <option value="Carl">Item3</option>
          <option value="Trist">Item4</option>
        </select>

        <div>{this.state.list1.user.name}</div>
      </div>
    );
  }
}

export default Following;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
};
