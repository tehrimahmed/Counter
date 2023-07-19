import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count);
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="row justify-content-center" style={{ fontWeight: 'bold'}}>Counter App</h1>
        <div className="row justify-content-center">
          <div className="col-2 text-center">
            <h2 style={{ fontWeight: 'bold' }}>Count: {this.state.count}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 text-center">
            <button className="btn btn-primary" onClick={() => this.decrement()}>-</button>
          </div>
          <div className="col-2 text-center">
            <button className="btn btn-primary" onClick={() => this.increment()}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
