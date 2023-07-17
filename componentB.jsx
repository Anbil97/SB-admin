import React from 'react';

const ComponentB = (props) => {
  const receivedValue = props.value;
  
  return (
    <div>
      {/* Use the received value in Component B */}
      <p>{receivedValue}</p>
    </div>
  );
};

export default ComponentB;
