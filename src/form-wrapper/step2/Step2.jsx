import React, { useState } from 'react'
import './style.css'

// icons
import arcadeIcon from  '../../assets/icon-arcade.svg'
import advancedIcon from  '../../assets/icon-advanced.svg'
import proIcon from  '../../assets/icon-pro.svg'

function Step2() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };



  return (
    <div className='select-plan'>
      <div className="select-plan-heading">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={arcadeIcon} alt="" />
          </div>
          <div className="card-details">
            <h3>arcade</h3>
            {
              checked ? <><p>$90/yr</p>
            <span>2 months free</span></> : <>$9/mo</> 
            }
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={advancedIcon} alt="" />
          </div>
          <div className="card-details">
            <h3>advanced</h3>
            <p>$120/yr</p>
            <span>2 months free</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={proIcon} alt="" />
          </div>
          <div className="card-details">
            <h3>pro</h3>
            <p>$150/yr</p>
            <span>2 months free</span>
          </div>
        </div>
      </div>

      <div class="subscription">
        <label 
        style={{fontWeight: checked ? '' : '600'}}
        htmlFor="subscription-toggle">monthly</label>
        <input 
        checked={checked}
        onChange={handleCheckboxChange}
        className="tgl tgl-light" id="subscription-toggle" type="checkbox" />
        <label className="tgl-btn" htmlFor="subscription-toggle" />
        <label 
        style={{fontWeight: checked ? '600' : ''}}
        htmlFor="subscription-toggle">yearly</label>
      </div>
    </div>
  )
}

export default Step2