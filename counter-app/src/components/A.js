import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import B from './B'

const A = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => (
    setCount(count + 1)
  );

  const handleDecrement = () => (
    setCount(count - 1)
  );

  return (
    <div className="container mt-5">
      <h1 className="row justify-content-center" style={{ fontWeight: 'bold' }}>Counter App</h1>
      <B count={count}/>
      <div className="row justify-content-center">
        <div className="col-2 text-center">
          <button className="btn btn-primary" onClick={handleDecrement}>-</button>
        </div>
        <div className="col-2 text-center">
          <button className="btn btn-primary" onClick={handleIncrement}>+</button>
        </div>
      </div>     
    </div>
  );
};

export default A;
