import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { CounterContext } from './context/context';
const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index:i,
    ismagical : i === 29_000_000
  }
})
function App(  ) {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(nums)
  // const magical = number.find(item=>item.ismagical===true)
const magical = useMemo(() => number.find(item=>item.ismagical===true), [number])
  return (
    <>
    <CounterContext.Provider value={count}>

    <Navbar />
    <h4> magical number is  {magical.index}</h4>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </CounterContext.Provider>
    </>
  )
}

export default App
