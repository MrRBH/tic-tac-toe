import React, { useContext } from 'react';
import { CounterContext } from '../context/context'; // Adjust the import path accordingly
import Button from './button';

function Component1() {
  const count = useContext(CounterContext);

  return (
    <div>
      {/* <Button/> */}
      {count}
    </div>
  );
}

export default Component1;
