import React, { useState } from 'react'
import './index.css'

function Input() {
  const [inpOne, setInpOne] = useState("")
  const [inpTwo, setInpTwo] = useState("")

  function handleSwap(){
    setInpOne(inpTwo)
    setInpTwo(inpOne)
  }

  return (
    <div className='swap'>
      <h3>Swap value</h3>
      <div>
        <input value={inpOne} onChange={(e) => setInpOne(e.target.value)} type="text" placeholder='Enter text'/>
        <input value={inpTwo} onChange={(e) => setInpTwo(e.target.value)} type="text" placeholder='Enter text'/>
        <button onClick={handleSwap}>Swap</button>
      </div>
      <li className='info'>1Ma'lumot:{inpOne}</li>
      <li className='info'>2Ma'lumot:{inpTwo}</li>
    </div>
  )
}

export default Input
