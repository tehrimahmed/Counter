import React from 'react';


const C = ({ count }) => {
  return (
    <div className="row justify-content-center">
        <div className="col-2 text-center">
            <h2 style={{ fontWeight: 'bold' }}>Count: {count}</h2>
        </div>
    </div>
  );
};

export default C;
