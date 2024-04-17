import React, { ReactElement, useState } from 'react'

interface CounterProps {
    name:string
}

export default function Counters({name}:CounterProps):ReactElement {

    let [count,setCount] = useState<number>(1);

    const handleIncrease = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrease = () => {
        if(count <= 0) {
            return
        }
        setCount(prev => prev - 1)
    }


  return (
    <div style={{fontSize: "2rem"}}>
        <h1>{name} Counter - {count}</h1>
        <div>
            <button onClick={handleDecrease}>-</button>    
            <button onClick={handleIncrease}>+</button>    
        </div>    
     </div>
  )
}
