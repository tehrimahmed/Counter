import React from 'react'
import C from './C';

const B = ({ count }) => {
  return (
    <div className="B">
      <C count={count}/>
    </div>
  );
}

export default B;
