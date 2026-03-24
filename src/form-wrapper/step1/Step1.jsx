import React from 'react'
import './style.css'

function Step1() {
  return (
    <div className='info-step'>
      <div className='info-heading'>
        <h1>personal info</h1>
        <p>Please provide your name, email and phone-number</p>
      </div>
      <form>
        <div className='input-group'>
          <label htmlFor="name">name</label>
          <input type="text" id='name' />
          <span className="error"></span>
        </div>
        <div className='input-group'>
          <label htmlFor="email">email</label>
          <input type="email" id='email' />
          <span className="error"></span>
        </div>
        <div className='input-group'>
          <label htmlFor="phone">phone number</label>
          <input type="number" id='phone' />
          <span className="error"></span>
        </div>
      </form>
    </div>
  )
}

export default Step1