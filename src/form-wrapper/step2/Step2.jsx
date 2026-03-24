import React from 'react'
import './style.css'

function Step2() {
  return (
    <div className='select-plan'>
      <div className="select-plan-heading">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      <div className="cards">
        <div className="card">
          <div className="icon"></div>
          <div className="card-details">
            <h5>arcade</h5>
            <p>$90/yr</p>
            <span>2 months free</span>
          </div>
        </div>
        <div className="card">
          <div className="icon"></div>
          <div className="card-details">
            <h5>advanced</h5>
            <p>$120/yr</p>
            <span>2 months free</span>
          </div>
        </div>
        <div className="card">
          <div className="icon"></div>
          <div className="card-details">
            <h5>pro</h5>
            <p>$150/yr</p>
            <span>2 months free</span>
          </div>
        </div>
      </div>

      <div class="subscription">
        <label htmlFor="subscription-toggle">monthly</label>
        <input class="tgl tgl-light" id="subscription-toggle" type="checkbox" />
        <label class="tgl-btn" for="subscription-toggle" />
        <label htmlFor="subscription-toggle">yearly</label>
      </div>
    </div>
  )
}

export default Step2