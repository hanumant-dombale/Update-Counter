import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [mge, setMge] = useState("none");

  const addCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }else{
      setMge("Maximum limit is hits");
    }
  }

  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }else{
      setMge("you cannot goes in negative number");
    }
  }

  return (
    <div>
      <h1>Counter Porject</h1>
      <h3>Counter: {count}</h3>
      <button onClick={addCount}>add Count</button>
      <button onClick={removeCount}>remove Count</button>
      <p>massage: {mge}</p>
    </div>
  )
}

export default App
