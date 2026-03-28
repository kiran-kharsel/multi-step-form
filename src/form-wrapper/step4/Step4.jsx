import React from 'react'
import './style.css'

function Step4({formData, setFormData }) {

  console.log(formData)
  return (
    <div className='summary'>
      <div className='summary-heading'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className="summary-detail">
        <div className="summary-detail-main">
          <h4 className="title">Arcade (monthly) </h4>
          <p className="price">$9/mo</p>
        </div>
        <ul className="summary-detail-addons">
          <li className="addOn">
            <div className="title">online service</div>
            <p className="price">+$1/mo</p>
          </li>
        </ul>
      </div>
      <div className="summary-total">
          <div>total (per month)</div>
          <p className="price">$12/mo</p>
        </div>
    </div>
  )
}

export default Step4