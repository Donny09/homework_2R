import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor1: 'blue',
      backgroundColor2: 'red'
    };
  }

  changeColor = () => {
    this.setState((prevColor) => ({
      backgroundColor1: prevColor.backgroundColor2,
      backgroundColor2: prevColor.backgroundColor1
    }));
  };

  render() {
    return (
      <div>
        <button
          className="square"
          style={{ backgroundColor: this.state.backgroundColor1, width:"100px", height:"100px" }}
          onClick={this.changeColor}
        >
        </button>
        <button
          className="square"
          style={{ backgroundColor: this.state.backgroundColor2, width:"100px", height:"100px" }}
          onClick={this.changeColor}
        >
        </button>
      </div>
    );
  }
}


export default App;
