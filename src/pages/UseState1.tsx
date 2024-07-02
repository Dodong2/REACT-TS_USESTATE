//Step 2: Creating and Updating State
import Card from "../components/Card"
import Button from "../components/Btn1"
import { useState } from "react"

const UseState1 = () => {
    const [count, setCount] = useState<number>(0)

    const HandleButton = () => {
        setCount(count + 1)
    }
  return (
    <>
    <Card>
      <h1>UseState1</h1>
        <h1>{count}</h1>
        <Button label="click" onClick={HandleButton}></Button>
    </Card>
    </>
  )
}

export default UseState1