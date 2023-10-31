import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ targetNumber, content="" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  const updateCounter = () => {
    if (count < targetNumber && targetNumber < 101) {
      setCount(prevCount => prevCount + 1);
    } else{
      setCount(prevCount => prevCount + 5);
    }
    // while(count < targetNumber){
    //   setInterval(()=>{
    //     setCount(prevCount => prevCount + 1);
    //   }, 1000)
    // }
  };

  // updateCounter()

  useEffect(() => {
    if (inView && count < targetNumber) {
      const animationFrame = requestAnimationFrame(updateCounter);
      // updateCounter()
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [inView, count, targetNumber]);

  return (
    <h2 ref={ref}>
      {count}{content}
    </h2>
  );
};

export default Counter;
