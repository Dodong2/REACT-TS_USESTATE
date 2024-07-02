import { useState } from 'react'

const calculateInitialValue = () => {
    return 42
}
const Expensive = () => {
    const [value] = useState(calculateInitialValue())
  return (
    <div>Value: {value}</div>
  )
}

export default Expensive
