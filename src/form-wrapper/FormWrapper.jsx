import React from 'react'
import './style.css'

function FormWrapper() {
  return (
    <div className='form-wrapper'>
      <aside>
        <div className='step active'>
          <div className="index">1</div>
          <div className="heading">
            <p>STEP 1</p>
            <h3>your info</h3>
          </div>
        </div>
      </aside>
      <main>
        <div className="current-step"></div>
        <div className="buttons"></div>
      </main>
    </div>
  )
}

export default FormWrapper