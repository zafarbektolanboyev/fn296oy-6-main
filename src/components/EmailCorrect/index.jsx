import React, { useState } from 'react'
import './index.css'

function EmailCorrect() {
  const [email, setEmail] = useState('')
  const [message,  setMessage] = useState('')

  function handleValidate(){
    if(email.includes("@") && email.includes(".com")){
      setMessage("Email to'gri")
    }else{
      setMessage("Email notog'ri")
    }
  }

  return (
    <div className='email'>
      <h3>Email Correct</h3>
      <div className='flex flex-row'>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
        <button onClick={handleValidate} className='btn3'>Save</button>
      </div>
      <p className='mt-[10px]'>{message}</p>
    </div>
  )
}

export default EmailCorrect
