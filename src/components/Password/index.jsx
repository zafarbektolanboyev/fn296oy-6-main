import React, { useState } from 'react'
import './index.css'

function Password() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleCLick(){
    if(password === confirmPassword && password !== ""){
      setMessage("Parollar bir hil")
    }else{
      setMessage("Parollar mos kelmadi")
    }
  }
  return (
    <div className='password'>
      <h3 >Password Correct</h3>
      <div className='flex flex-col'>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='psIn' type="password" placeholder='Password'/>
        <input className='psIn' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password'/>
        <button onClick={handleCLick} className='btn4'>Save</button>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default Password
