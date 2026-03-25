import React, { useState } from 'react'
import './style.css'

// icons
import arcadeIcon from '../../assets/icon-arcade.svg'
import advancedIcon from '../../assets/icon-advanced.svg'
import proIcon from '../../assets/icon-pro.svg'

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
        <div className="cards">
          <Card
            icon={arcadeIcon}
            title="Arcade"
            monthlyPrice="$9/mo"
            yearlyPrice="$90/yr"
            checked={checked}
          />
          <Card
            icon={advancedIcon}
            title="Advanced"
            monthlyPrice="$12/mo"
            yearlyPrice="$120/yr"
            checked={checked}
          />
          <Card
            icon={proIcon}
            title="Pro"
            monthlyPrice="$15/mo"
            yearlyPrice="$150/yr"
            checked={checked}
          />
        </div>

      </div>


      <div className="subscription">
        <label
          style={{ fontWeight: checked ? '' : '600' }}
          htmlFor="subscription-toggle">monthly</label>
        <input
          checked={checked}
          onChange={handleCheckboxChange}
          className="tgl tgl-light" id="subscription-toggle" type="checkbox" />
        <label className="tgl-btn" htmlFor="subscription-toggle" />
        <label
          style={{ fontWeight: checked ? '600' : '' }}
          htmlFor="subscription-toggle">yearly</label>
      </div>
    </div>
  )
}

export default Step2


// card component
function Card({ icon, title, monthlyPrice, yearlyPrice, checked }) {
  return (
    <div className="card">
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        {checked ? (
          <>
            <p>{yearlyPrice}</p>
            <span>2 months free</span>
          </>
        ) : (
          <p>{monthlyPrice}</p>
        )}
      </div>
    </div>
  );
}
