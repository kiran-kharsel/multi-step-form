import React, { useState } from 'react'
import './style.css'

function Step1({formData, setFormData}) {

  const [error, setError] = useState({})

  const updateField = (field, value) => {
    setFormData(prev =>({
      ...prev,
      [field]: value,
    }))
  }

  function handleBlur(e){
    const {name, value} = e.target;
    let errorMsg = '';

    console.log('on-blur --', name)

    if(name === 'userName'){
      if(value.trim().length < 3){
        errorMsg = 'name must be atleast 3 characters'
      }
    }

    if(name === 'email'){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        errorMsg = "Invalid email format"
      }
    }

    if(name === 'phone'){
      const phoneRegex = /^\+?\d{10,15}$/
      if (!phoneRegex.test(value)) {
        errorMsg = "Invalid phone number"
      }
    }

    setError(prev => (
      {...prev, [name]: errorMsg}
    ))
  }

  return (
    <div className='info-step'>
      <div className='info-heading'>
        <h1>personal info</h1>
        <p>Please provide your name, email and phone-number</p>
      </div>
      <form>
        <div className='input-group'>
          <label htmlFor="name">name</label>
          <input 
           name="userName"
          onChange={e =>  updateField("userName", e.target.value)}
          onBlur={handleBlur}
          value={formData.userName}
          required type="text" id='name' placeholder='e.g Stephen King' />
          
          {error.userName && <span style={{color: 'red'}} className="error">{error.userName}</span>}
        </div>
        <div className='input-group'>
          <label htmlFor="email">email</label>
          <input 
          name="email"
          value={formData.email}
          onChange={e => updateField("email", e.target.value)}
          onBlur={handleBlur}
          required type="email" id='email' placeholder='e.g stephenking@email.com'/>
          
          {error.email && <span style={{color: 'red'}} className="error">{error.email}</span>}
        </div>
        <div className='input-group'>  
          <label htmlFor="phone">phone number</label>
          <input 
           name="phone"
          value={formData.phone || ''}
          onChange={e => updateField("phone", e.target.value)}
          onBlur={handleBlur}
          required type="number" id='phone' placeholder='e.g +1234567890'/>
          
          {error.phone && <span style={{color: 'red'}} className="error">{error.phone}</span>}
        </div>
      </form>
    </div>
  )
}

export default Step1