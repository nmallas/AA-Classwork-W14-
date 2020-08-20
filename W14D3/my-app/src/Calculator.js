import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0,
        num1: "",
        num2: ""
    }
  }

  handleFirstNum = (e) => {
    const value = Number(e.target.value);
    this.setState( { num1 : value } )
  }

  handleSecondNum = (e) => {
    const value = Number(e.target.value);
    this.setState( { num2 : value } )
  }

  add = () => {
    this.setState( {result : (this.state.num1 + this.state.num2) } )
  }

  subtract = () => {
      this.setState({result: (this.state.num1 - this.state.num2)})
  }

  multiply = () => {
    this.setState({result: (this.state.num1 * this.state.num2)})
    }

    divide = () => {
        this.setState({result: (this.state.num1 / this.state.num2)})
    }

    clear = () => {
        this.setState({
            num1: "",
            num2: "",
            result: 0
        })
    }

  render() {
    const {num1, num2, result} = this.state;
    return (
      <div>
        <input onChange={this.handleFirstNum} value={num1} placeholder="First number"/>
        <input onChange={this.handleSecondNum} value={num2} placeholder="Second number"/>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.divide}>Divide</button>
        <button onClick={this.clear}>Clear</button>
        <h1>Result: {result}</h1>
      </div>
    );
  }
}

export default Calculator;
