import { useState } from 'react'
import './App.css';

function App() {

  const [maxvalue, setMaxvalue] = useState(1000) //set 1000 as maxmimum value as default
  const [minvalue, setMinvalue] = useState(1) //set 1 as minimum value as default
  const [count, setCount] = useState(minvalue)
  //increment count by 1 in each "increment button" press up to maximum limit
  const incrementHandler = () => {
    if (count < maxvalue) {
      setCount(count + 1)
    }
  }
  //decrement count by 1 in each "decrement button" press up to mimimum limit
  const decrementHandler = () => {
    if (minvalue < count)
      setCount(count - 1)
  }
  return (
    <div className="App">
      <label>Enter minimum limit</label>
      <input type="number" placeholder=" Enter minimum limit" name=" minimum" onChange={(e) => setMinvalue(e.target.value)} value={minvalue} />
      <label>Enter maximum limit</label>
      <input type="number" placeholder=" Enter maximum limit" name=" maximum" onChange={(e) => setMaxvalue(e.target.value)} value={maxvalue} />
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div >
  );
}

export default App;
