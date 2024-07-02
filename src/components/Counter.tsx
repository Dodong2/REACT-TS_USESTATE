//step 1: Lazy Initialization:
import { useState } from "react"

const Counter = () => {
    const [ count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
      </div>
    </>
  )
}

export default Counter
