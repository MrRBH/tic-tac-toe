import { useState } from 'react'
import Blocks from './blocks.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setstate] = useState(Array(9).fill(null))
console.log("State", state);
  return (
    <>
      <div className='Board'>
        <div className='row'>
          <Blocks value="X" />
          <Blocks value="0"  />
          <Blocks value="X"  />
        </div>
        <div className='row'>
          <Blocks />
          <Blocks />
          <Blocks />

        </div>
        <div className='row'>
          <Blocks />
          <Blocks />
          <Blocks />

        </div>
      </div>
    </>
  )
}

export default App
