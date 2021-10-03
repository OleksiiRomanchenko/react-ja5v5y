import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect', counter);
    setCounter(4);
  }, [counter]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect', counter);
    setCounter(5);
  });

  const onClickButton = () => {
    let newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <div>
      <button onClick={onClickButton}>Click btn</button>
    </div>
  );
}
