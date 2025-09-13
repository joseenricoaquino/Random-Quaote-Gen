import React
 from "react"
 import { useState } from "react";
const CounterC = () => {

    const [count, setCount] = useState(0);
    
      const increment = () => {
        setCount((prevState) => prevState = prevState + 1 );
        console.log(count)
     }

    return(
        <>
            <div>Result: {count}</div>
            <button onClick={increment}>+</button>
        </>
        
    );
}

export default CounterC;