import React, { useContext } from 'react';
import { CounterContext } from '../context/context'; // Adjust the import path accordingly

function Button() {
  const count = useContext(CounterContext);

  return (
    <div>
      button count is {count}
    </div>
  );
}

export default Button;
