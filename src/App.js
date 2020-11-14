import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    name: "",
    data: []
  };

  changeVal = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  submitForm = (e) => {
    if (this.state.name) {
      this.state.data.push(this.state.name);
    } else {
      alert("please fill the form");
    }
    console.log(this.state.data);
    e.preventDefault();
    document.getElementById("name").value = "";
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.changeVal}
          />
          <input type="submit" value="Submit" />
        </form>
        <h1>Hello World</h1>
        <ul>
          {this.state.data.map((datas, i) => (
            <li key={i}> {datas} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
