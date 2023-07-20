import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import B from './B';
import { CounterProvider } from './CounterContext';

const A = () => {
  return (
    <CounterProvider>
      <div className="container mt-5">
        <h1 className="row justify-content-center" style={{ fontWeight: 'bold' }}>
          Counter App
        </h1>
        <B />
      </div>
    </CounterProvider>
  );
};

export default A;
