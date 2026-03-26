import React from 'react'
import './style.css'

function Step3() {
  return (
    <div className='add-ons-container'>
      <div className="add-ons-heading">
        <h1>Pick add-ons</h1>
        <p>Add-ons help to enhance your gaming experince</p>
      </div>
      <div className="add-ons">
        <div className="add-on">
          <input type="checkbox" className='checkbox'/>
          <div>
            <h4>online service</h4>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$10/yr</span>
        </div>
        <div className="add-on"></div>
        <div className="add-on"></div>
      </div>
    </div>
  )
}

export default Step3