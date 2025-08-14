import { useState } from "react"

function App(){
  let [count, setCount] = useState(5)

  const addCount = () => {
    setCount(count+1)
  }

  const removeCount = () => {
    setCount(count-1)
  }
  
  return(
    <>
      <h1>Weve to count the number from 1 to 20</h1>
      <h2>count = {count}</h2>

      <button
      onClick={addCount}
      >Add number :{count}</button>

      <br/>
    
      <button
      onClick={removeCount}
      >Remove number :{count}</button>
    </>
  )
}
export default App
