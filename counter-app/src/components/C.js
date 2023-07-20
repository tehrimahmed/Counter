import React from 'react';
import { CounterContext } from './CounterContext';

const C = () => {
  return (
    <CounterContext.Consumer>
      {({ count, increment, decrement }) => (
        <div>
          <h2 className="row justify-content-center" style={{ fontWeight: 'bold' }}>Count: {count}</h2>
          <div className="row justify-content-center">
            <div className="col-2 text-center">
              <button className="btn btn-primary" onClick={decrement}>-</button>
            </div>
            <div className="col-2 text-center">
              <button className="btn btn-primary" onClick={increment}>+</button>
            </div>
          </div>
        </div>
      )}
    </CounterContext.Consumer>
  );
};

export default C;
