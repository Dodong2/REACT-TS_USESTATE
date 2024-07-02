//Step 1: Managing Complex State
import  { useState } from 'react'

interface User {
    name: string;
    age: number;
}
const UserProf = () => {
    const [user, setUser] = useState<User>({name: '', age: 0})

    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, name: e.target.value})
    }

    const updateAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, age: parseInt(e.target.value) })
    }
  return (
    <>
      <div>
        <p> {user.name}</p>
        <p> {user.age}</p>
        <input type='text' value={user.name} onChange={updateName} placeholder='name'/>
        <input type='number' value={user.age} onChange={updateAge} placeholder='age'/>
      </div>
    </>
  )
}

export default UserProf
