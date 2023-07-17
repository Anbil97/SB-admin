import React from 'react';

const ComponentA = () => {
  const valueToPass = 'Hello from Component A';
  
  return (
    <div>
      {/* Render other content */}
      <ComponentB value={valueToPass} />
    </div>
  );
};

export default ComponentA;
