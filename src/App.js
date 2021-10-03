import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  useEffect(() => {
    console.log('useEffect', counter);
    setCounter(4);

    counterRef.current++;
  }, [counter]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect', counter);
    setCounter(3);

    counterRef.current++;
  });

  const onClickButton = () => {
    let newCounter = counter + 1;
    //setCounter(newCounter);

    counterRef.current++;
  };

  return (
    <div>
      <h1>{counterRef.current}</h1>
      <button onClick={onClickButton}>Click btn</button>
    </div>
  );
}
