import React from 'react'
import './style.css'
import successIcon from '../../assets/icon-thank-you.svg'

function SuccessMsg() {
  return (
    <div className='success-message'>
      <img src={successIcon} alt="success-image" />
      <h1>Thank you</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default SuccessMsg