import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import B from './B';
import { CounterContext } from './CounterContext';

const A = () => {
  return (
    <div className="container mt-5">
      <h1 className="row justify-content-center" style={{ fontWeight: 'bold' }}>
        Counter App
      </h1>
      <B />
      <div className="row justify-content-center">
        <div className="col-2 text-center">
          <CounterContext.Consumer>
            {({ handleDecrement }) => (
              <button className="btn btn-primary" onClick={handleDecrement}>-</button>
            )}
          </CounterContext.Consumer>
        </div>
        <div className="col-2 text-center">
          <CounterContext.Consumer>
            {({ handleIncrement }) => (
              <button className="btn btn-primary" onClick={handleIncrement}>+</button>
            )}
          </CounterContext.Consumer>
        </div>
      </div>
    </div>
  );
};

export default A;
