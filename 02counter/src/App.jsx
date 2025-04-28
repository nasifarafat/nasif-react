import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    counter = counter + 1
    if (counter > 10){
      counter = 10
    }
    console.log('Value Added', counter);
    setCounter(counter)
    
  }

  const removeValue = () => {
    counter = counter - 1
    if (counter < 0){
      counter = 0}
    console.log('Value Removed', counter);
    setCounter(counter)
  }

  return (
    <>
      <h2>Counter Value (Between 0 to 10): {counter}</h2>
      <br />
      <button
      onClick={addValue}
      >Add Value</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
