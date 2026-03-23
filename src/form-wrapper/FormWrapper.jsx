import React from 'react'
import './style.css'

function FormWrapper() {
  return (
    <div>
      <aside>
        <div>
          <div className="index active">1</div>
          <div className="heading">
            <p>STEP 1</p>
            <p>your info</p>
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