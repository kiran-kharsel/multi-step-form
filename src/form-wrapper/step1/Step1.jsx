import React from 'react'
import './style.css'

function Step1({formData}) {
  console.log(formData)
  return (
    <div className='info-step'>
      <div className='info-heading'>
        <h1>personal info</h1>
        <p>Please provide your name, email and phone-number</p>
      </div>
      <form>
        <div className='input-group'>
          <label htmlFor="name">name</label>
          <input required type="text" id='name' placeholder='e.g Stephen King' />
          <span className="error"></span>
        </div>
        <div className='input-group'>
          <label htmlFor="email">email</label>
          <input required type="email" id='email' placeholder='e.g stephenking@email.com'/>
          <span className="error"></span>
        </div>
        <div className='input-group'>
          <label htmlFor="phone">phone number</label>
          <input required type="number" id='phone' placeholder='e.g +1234567890'/>
          <span className="error"></span>
        </div>
      </form>
    </div>
  )
}

export default Step1